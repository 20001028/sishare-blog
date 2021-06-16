<template>
    <div class="edit-blog-container">
        <div class="edit-head">
            <a class="iconfont icon-qianyitian" @click="$router.push({path:'/'})">
                所有文章
            </a>
            <a>
                写文章
            </a>
            <button class="iconfont icon-fabu" @click="launchBlog" >
                发布
            </button>
        </div>
        <div class="blog-title">
            <input id="blog-title" placeholder="输入标题" type="text" v-model="blog.title"/>
        </div>
        <div class="blog-subjects">
            <a ref="subject" @click="subjectDialog.visible=true;"
                v-for="sub in blog.subjects" :key="sub.id">{{sub.name}}</a>
            <a @click="subjectDialog.visible=true;">添加专题</a>
        </div>
        <div class="editor-md-container">
            <div class="editor-controls">
                <el-popover-header @insert-header="insertHeader"></el-popover-header>
                <a class="iconfont icon-jiacu" style="font-size:14px;" @click="emphasis"></a>
                <a class="iconfont icon-xieti" @click="italics"></a>
                <a class="iconfont icon-dashujukeshihuaico-" style="font-size:18px;" @click="codeBlock"></a>
                <a class="iconfont icon-link1" @click="showLinkDialog('link')"></a>
                <a class="iconfont icon-tupian" style="font-size:20px;" @click="showLinkDialog('img')"></a>
                <a class="iconfont icon-youxuliebiao" style="font-size:18px;" @click="orderedList"></a>
                <a class="iconfont icon-wuxuliebiao" style="font-size:18px;" @click="unorderedList"></a>
                <el-popover-help></el-popover-help>
            </div>
            <div class="edit-container">
                <textarea id="content" v-model="blog.source" 
                    @input="setMarkdown"
                    placeholder="赶快开始你的学习吧" @keydown="enterKey" @scroll="onscroll"></textarea>
            </div>
            <div id="preview" class="preview-container" v-html="blog.preHtml" v-highlight>
            </div>
        </div>
        <el-dialog-link ref="link" :linkDialog="linkDialog" :handleTextarea="handleTextarea" @click="test" :blog="blog"></el-dialog-link>
        <el-dialog-subject :subjectDialog="subjectDialog" :blogSubjects="blog.subjects"></el-dialog-subject>
    </div>
</template>

<script>
let converter = new showdown.Converter();
let ElPopoverHeader=()=>import('./el-popover-header.vue');
let ElPopoverHelp=()=>import('./el-popover-help.vue');
let ElDialogLink=()=>import('./el-dialog-link.vue');
let ElDialogSubject=()=>import('./el-dialog-subject.vue');

export default {
    components:{
        ElPopoverHeader,
        ElPopoverHelp,
        ElDialogLink,
        ElDialogSubject
    },
    provide:function(){
        return{
            blog:this.blog
        }
    },
    data(){
        return{
            blog:{
                id:'',
                preHtml:'',
                reading:0,
                source:'',
                visible:true,
                subjects:[],
                title:''
            },
            linkDialog:{//插入链接的Dialog
                title:'插入链接',
                text:'',
                href:'',
                visible:false,
                type:'link'
            },
            subjectDialog:{
                title:'专题管理',
                visible:false,
            },
            intervarl:null
        }
    },
    async created(){
        if(this.$route.query.type==='edit'){
            this.blog=await this.getBlogById();
            this.$set(this.blog,'subjects',await this.getSubjectByBlogId());
            console.log(this.blog)
            //创建定时器，定时保存，会在destroyed时销毁
            if(!this.intervarl){
                this.intervarl=setInterval(()=>{
                    this.updateBlog();
                    let date=new Date();
                    this.$notify({
                        title: date.toTimeString(),
                        message: '已为您自动保存',
                        type: 'success',
                        duration:1000
                    });
                },1000*60);
            }
        }else{
            this.blog.id=this.getId();
            if(!this.intervarl){
                this.intervarl=setInterval(()=>{
                    sessionStorage.setItem(this.blog.id,JSON.stringify(this.blog));
                    let date=new Date();
                    this.$notify({
                        title: date.toTimeString(),
                        message: '已为您自动保存',
                        type: 'success',
                        duration:1000
                    });
                },1000*10);
            }
        }
    },
    mounted(){
        
    },
    methods:{
        // 把源代码转换为markdown格式
        setMarkdown(){
            this.blog.preHtml=converter.makeHtml(this.blog.source);
        },
        // 生成一个唯一id
        getId(){
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        // 处理markdown编辑器
        // 传入一个处理函数
        handleTextarea(insert){
            let textarea=document.getElementById('content');
            let startPos=textarea.selectionStart;
            let value=textarea.value;//取出当前文本域内的值
            insert(textarea,startPos,value);
            textarea.focus();
            this.blog.source=textarea.value;//更新content
            this.setMarkdown();
        },
        // 标题h2-h5
        insertHeader(index){
            let insert=new Array(index+2).fill('#').join('');
            let method=(textarea,startPos,value)=>{
                textarea.value=value.substring(0,startPos)+'\n'
                +insert+value.substring(startPos,value.length);
            };
            this.handleTextarea(method);
        },
        // 加粗
        emphasis(){
            let method=(textarea,startPos,value)=>{
                let endPos=textarea.selectionEnd;
                textarea.value=value.substring(0,startPos)+'**'+value.substring(startPos,endPos)
                +'**'+value.substring(endPos,value.length);
            };
            this.handleTextarea(method);
        },
        // 斜体
        italics(){
            let method=(textarea,startPos,value)=>{
                let endPos=textarea.selectionEnd;
                textarea.value=value.substring(0,startPos)+'*'+value.substring(startPos,endPos)
                +'*'+value.substring(endPos,value.length);
            };
            this.handleTextarea(method);
        },
        // 代码块
        codeBlock(){
            let method=(textarea,startPos,value)=>{
                let endPos=textarea.selectionEnd;
                textarea.value=value.substring(0, startPos)
                + '\n```\n'+value.substring(startPos,endPos)
                +'\n```\n' + value.substring(endPos, value.length);
            };
            this.handleTextarea(method);
        },
        // 打开链接对话框
        showLinkDialog(type){
            this.linkDialog.visible=true;
            this.linkDialog.type=type;
            this.linkDialog.title=type==='link' ? '插入链接' : '插入图片';
        },
        // 有序列表
        orderedList(){
            let method=(textarea,startPos,value)=>{
                textarea.value=value.substring(0, startPos)
                +'\n1. 第一项\n2. 第二项\n3. 第三项'+ value.substring(startPos, value.length);
            }
            this.handleTextarea(method);
        },
        // 无序列表
        unorderedList(){
            let method=(textarea,startPos,value)=>{
                textarea.value=value.substring(0, startPos)
                +'\n+ 第一项\n+ 第二项\n+ 第三项'+ value.substring(startPos, value.length);
            }
            this.handleTextarea(method);
        },
        // 根据ID获取blog
        getBlogById(){
            let that=this;
            //根据id请求数据并渲染标题、文本域和预览
            return that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/blogs/'+that.$route.query.id,
            }).then((res)=>{
                return res.data;
            });
        },
        updateBlog(){
            let that=this;
            //更新文章
            that.$axios({
                method:'PUT',
                url:'http://42.192.180.142:3000/blogs/'+that.blog.id,
                data:that.blog
            }).then((res)=>{
                //跳转到查看页面
                //this.$router.push({path:'/blogs/'+that.blog.id});
            });
        },
        getSubjectByBlogId(){
            let that=this;
            return that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/subjects/'+that.$route.query.id
            }).then((res)=>{
                return res.data;
            });
        },
        addBlog(){
            let that=this;
            //新增文章
            that.$axios({
                method:'POST',
                url:'http://42.192.180.142:3000/blogs',
                data:that.blog
            }).then((res)=>{
                //跳转到查看页面
                
            });
        },
        async launchBlog(){
            console.log('ok')
            if(this.blog.title.trim()===''){
                document.getElementById('blog-title').focus();
                this.$message.error('不能缺少标题');
                return;
            }
            if(this.blog.subjects.length<1){
                this.$message.error('请至少为您的Blog添加一个专题');
                setTimeout(()=>{
                    this.subjectDialog.visible=true;
                },1000);
                return;
            }
            if(this.$route.query.type==='edit'){
                this.updateBlog();
            }
            else{
                this.addBlog();
            }
            setTimeout(()=>{
                this.$router.push({path:'/blogs/'+this.blog.id});
            },100);
            //this.$router.push({path:'/blogs/'+this.blog.id});
        },
        enterKey(e){
            let method=(textarea,startPos,value)=>{
                textarea.value=value.substring(0,startPos)+'<br>\n'+value.substring(startPos,value.length);
            }
            switch(e.key){
                case 'enter':
                    this.handleTextarea(method);
                    break
            }
        },
        onscroll(e){
            let text=e.target;
            let preview=document.getElementById('preview');
            preview.scrollTop=text.scrollTop/2;
        }
    },
    beforeDestroy(){
        if(this.intervarl)
            clearInterval(this.intervarl);
    }
}
</script>

<style scoped src="../../css/edit/edit.css">

</style>