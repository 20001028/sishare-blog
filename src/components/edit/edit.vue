<template>
    <div class="write-article-container">
        <div class="write-head">
            <a class="iconfont icon-qianyitian" @click="goToIndex">
                所有文章
            </a>
            <a v-on:click="enter">
                写文章
            </a>
            <button class="iconfont icon-fabu" @click="launch" >
                发布
            </button>
        </div>
        <div class="article-title">
            <input placeholder="输入标题" type="text" v-model="title"/>
        </div>
        <div class="article-subjects">
            <a @click="openSubjectDialog" v-for="sub in blogSubjects" :key="sub.id">{{sub.name}}</a>
            <a @click="openSubjectDialog">添加专题</a>
        </div>
        <div class="editor-md-container">
            <div class="editor-controls" @click="handle">
                <el-popover
                    placement="right"
                    width="150"
                    trigger="hover">
                    <div class="head-group">
                        <a>一级标题</a>
                        <a>二级标题</a>
                        <a>三级标题</a>
                        <a>四级标题</a>
                        <a>五级标题</a>
                        <a>六级标题</a>
                    </div>
                    <a slot="reference" class="iconfont icon-biaoti"></a>
                </el-popover>

                <a class="iconfont icon-jiacu" style="font-size:14px;"></a>
                <a class="iconfont icon-xieti"></a>
                <a class="iconfont icon-dashujukeshihuaico-" style="font-size:18px;"></a>
                <a class="iconfont icon-link1" @click="openLinkDialog('link')"></a>
                <a class="iconfont icon-edui-for-blockquote"></a>
                <a class="iconfont icon-tupian" style="font-size:20px;" @click="openLinkDialog('img')"></a>
                <a class="iconfont icon-shipin" style="font-size:14px;"></a>
                <a class="iconfont icon-biaoge" style="font-size:18px;"></a>
                <a class="iconfont icon-gongshi" style="font-size:26px;"></a>
                <a class="iconfont icon-youxuliebiao" style="font-size:18px;"></a>
                <a class="iconfont icon-wuxuliebiao" style="font-size:18px;" title="无序列表"></a>
                <a class="iconfont icon-fengexian" style="font-size:24px;" title="分割线"></a>
                <a class="iconfont icon-bangzhu" style="font-size:20px;" title="帮助"></a>
            </div>
            <div class="edit-container">
                <textarea id="content" v-model="content" @input="setMarkDown" placeholder="赶快开始你的学习吧" @keydown="enter" @scroll="onscroll"></textarea>
            </div>
            <div id="preview" class="preview-container" v-html="preHtml" v-highlight>
            </div>
        </div>
        <el-dialog
            :title="linkDialog.title"
            :visible.sync="linkDialog.visible"
            width="50%">
            <el-input placeholder="请输入内容" v-model="linkDialog.text">
                <template slot="prepend">alt</template>
            </el-input>
            <p style="width=30px;height:10px;visibility:hidden;"></p>
            <el-input placeholder="请输入链接地址" v-model="linkDialog.href">
                <template slot="prepend">link</template>
            </el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="linkDialog.visible = false">取 消</el-button>
                <el-button type="primary" @click="addLink">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            :title="subjectDialog.title"
            :visible.sync="subjectDialog.visible"
            width="50%">
            <div class="subjects-container">
                <a>所有专题</a>
                <div class="all-subjects">
                    <div v-for="sub in allSubjects" :key="sub.id" class="sub-item">
                        <a @click="addSubToBlog(sub.id)">{{sub.name}}</a>
                        <a class="subject-delete iconfont icon-shanchu"></a>
                    </div>
                </div>
                <a>我的专题(至少添加一个)</a>
                <div class="my-subjects">
                    <div v-for="sub in blogSubjects" :key="sub.id" class="sub-item">
                        <a>{{sub.name}}</a>
                        <a class="subject-delete iconfont icon-shanchu" @click="deleteSubFromBlog(sub.id)"></a>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<style scoped src="../../css/edit/edit.css">

</style>

<script>
let converter = new showdown.Converter();

export default {
    data(){
        return{
            top:'12px',
            content:'',
            preHtml:"",
            title:'',
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
            allSubjects:[],
            blogSubjects:[]
        }
    },
    created(){
        let that=this;
        //判断是修改还是新文章
        if(that.$route.query.type==='edit'){
            //根据id请求数据并渲染标题、文本域和预览
            that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/articles/'+that.$route.query.id,
            }).then((res)=>{
                that.preHtml=res.data.html;
                that.content=res.data.article.content;
                that.title=res.data.article.title;
            });
            that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/subjects/'+that.$route.query.id
            }).then((res)=>{
                that.blogSubjects=res.data;
            });
        };
    },
    mounted(){
        //console.log(this.$route.query);
    },
    methods:{
        addSubToBlog(id){
            let that=this;
            if(that.blogSubjects.length>=5)
                return;
            let filters=that.blogSubjects.filter(item=>item.id===id);
            if(filters.length>0)
                return;
            that.blogSubjects.push(...that.allSubjects.filter(item=>item.id===id));
            that.$axios({
                method:'POST',
                url:'http://42.192.180.142:3000/blog-subs',
                data:{
                    blogId:that.$route.query.id,
                    subId:id
                }
            }).then((res)=>{
                
            });
        },
        deleteSubFromBlog(id){
            let that=this;
            that.blogSubjects=that.blogSubjects.filter(item=>item.id!==id);
            that.$axios({
                method:'DELETE',
                url:'http://42.192.180.142:3000/subjects/'+that.$route.query.id+'/'+id,
            }).then((res)=>{
                console.log(res);
            });
        },
        openSubjectDialog(){
            let that=this;
            that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/subjects'
            }).then((res)=>{
                that.allSubjects=res.data;
                that.subjectDialog.visible=true;
            });
            that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/subjects/'+that.$route.query.id
            }).then((res)=>{
                that.blogSubjects=res.data;
                that.subjectDialog.visible=true;
            });
        },
        openLinkDialog(type){
            this.linkDialog.type=type;
            this.linkDialog.title=type==='img' ? '插入图片' : '插入链接';
            this.linkDialog.visible=true;
        },
        addLink(){
            //对话框“确定”按钮的监听函数
            //将alt和link插入到文本域中
            //获取文本域DOM节点
            let textarea=document.getElementById('content');
            //插入链接一般不管是否选中内容，我们都采用头插
            let pos=textarea.selectionStart;
            let value=textarea.value;//取出当前文本域内的值
            let type=this.linkDialog.type==='link' ? '' : '!';//判断是链接还是图片
            //插入链接格式
            textarea.value=value.substring(0,pos)+type+'['+this.linkDialog.text+']'
                +'('+this.linkDialog.href+')'+value.substring(pos,value.length);
            this.content=textarea.value;//更新content
            this.setMarkDown();//渲染Markdown
            //关闭对话框
            this.linkDialog.visible=false;
            //将对话框内部内容清除，避免污染下次打开
            this.linkDialog.text='';
            this.linkDialog.href='';
        },
        handle(e){//事件代理
            let index;
            for(let i=0;i<e.target.parentNode.children.length;i++){
                if(e.target.parentNode.children[i]===e.target){
                    index=i;
                    break;
                }
            }
            let operations=['h','b','i','code','link','quote','img','video','table','gongshi','ol','ul','line','help'];
            let text=document.getElementById('content');
            //开始和结束指针
            let startPos=text.selectionStart;
            let endPos=text.selectionEnd;
            let value=text.value;
            if([0,1,2].includes(index)&&startPos===endPos)
                return;
            //保存scrollTop
            let restoreTop = text.scrollTop;
            switch(index){
                case 0:
                    text.value=value.substring(0, startPos) + '###'+text.value.substring(startPos,endPos)+ text.value.substring(endPos, text.value.length);
                    break;
                case 1:
                    text.value=value.substring(0, startPos) + '**'+text.value.substring(startPos,endPos)+'**' + text.value.substring(endPos, text.value.length);
                    break;
                case 2:
                    text.value=value.substring(0, startPos) + '*'+text.value.substring(startPos,endPos)+'*' + text.value.substring(endPos, text.value.length);
                    break;
                case 3:
                    text.value=value.substring(0, startPos) + '\n```\n'+text.value.substring(startPos,endPos)+'\n```\n' + text.value.substring(endPos, text.value.length);
                    break;
                case 5:
                    text.value=value.substring(0, startPos) + '>'+text.value.substring(startPos,endPos)+'' + text.value.substring(endPos, text.value.length);
                    break;
                case 10:
                    text.value=value.substring(0, startPos) + '\n1. '+text.value.substring(startPos,endPos)+'' + text.value.substring(endPos, text.value.length);
                    break;
                case 11:
                    text.value=value.substring(0, startPos) + '\n+ '+text.value.substring(startPos,endPos)+'' + text.value.substring(endPos, text.value.length);
                    break;
            }
            //text.value = value.substring(0, startPos) + '**'+text.value.substring(startPos,endPos)+'**' + text.value.substring(endPos, text.value.length);
            if (restoreTop > 0)
            {
                text.scrollTop = restoreTop;
            }
            // text.focus();
            // text.selectionStart= startPos + myValue.length;
            // text.selectionEnd= startPos + myValue.length;
            this.content=text.value;
            this.setMarkDown();
        },
        setMarkDown(){
            this.preHtml=converter.makeHtml(this.content);
        },
        goToIndex(){
            this.$router.push({path:'/'})
        },
        launch(){
            let that=this;
            if(that.$route.query.type==='edit'){
                //更新文章
                that.$axios({
                    method:'PUT',
                    url:'http://42.192.180.142:3000/articles/'+that.$route.query.id,
                    data:{
                        html:that.preHtml,//存储在文件中
                        title:that.title,
                        content:that.content//存储在数据库中·
                    }
                }).then((res)=>{
                    //跳转到查看页面
                    this.$router.push({path:'/articles/'+that.$route.query.id});
                });
            }
            else{
                //新增文章
                that.$axios({
                    method:'POST',
                    url:'http://42.192.180.142:3000/articles',
                    data:{
                        html:that.preHtml,//存储在文件中
                        title:that.title,
                        content:that.content//存储在数据库中·
                    }
                }).then((res)=>{
                    //跳转到查看页面
                    this.$router.push({path:'/articles/'+res.data.id});
                });
            }
        },
        enter(e){
            let text=e.target;
            let pos=text.selectionStart;
            console.log(e);
            switch(e.key){
                case 'enter':
                    text.value=text.value.substring(0,pos)+'<br>\n'+text.substring(pos,text.value.length);
                    this.content=text.value;
                    this.setMarkDown();
                    break
            }
        },
        onscroll(e){
            let text=e.target;
            let preview=document.getElementById('preview');
            preview.scrollTop=text.scrollTop/2;
        }
    }
}
</script>