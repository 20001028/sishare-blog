<template>
    <div class="blog-list-container">
        <div class="subject-list">
            <a :class="['recommand-blogs',...recommandClass]" @click="recommandBlogs">推荐</a>
            <a :class="[sub.selected]" v-for="sub in subjectList" :key="sub.id" @click="getBlogsBySubjectId(sub.id)">
                {{sub.name}}
            </a>
            <a class="more-sub">查看更多</a>
        </div>
        <div class="blog-list">
            <div v-for="blog in blogList" :key="blog.id" class="blog-list-item">
                <div class="blog-title">
                    <a @click="toBlog(blog.id)">{{blog.title}}</a>
                </div>
                <div class="blog-subjects">
                    <a class="sub-item" v-for="sub in blog.subjects" :key="sub.id" @click="getBlogsBySubjectId(sub.id)">{{sub.name}}</a>
                </div>
                <div class="blog-detail">
                    <a class="blog-time">
                        <a class="iconfont icon-shijianshi" style="color:yellow;"></a>
                        {{blog.time}}
                    </a>
                    <a class="blog-reading">
                        <a class="iconfont icon-liulan" style="font-size:14px"></a>
                        {{blog.reading}}
                    </a>
                    <a class="blog-edit" style="cursor:pointer;" @click="toEdit(blog.id)">
                        <a class="iconfont icon-bianji"></a>
                        编辑
                    </a>
                    <a class="blog-delete" style="cursor:pointer;" @click="deleteBlog(blog.id)">
                        <a class="iconfont icon-bianji"></a>
                        删除
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="../../css/main/blog-list.css">
</style>

<script>
export default {
    async created(){
        await this.getSubjectList();
        await this.getBlogList();
    },
    data(){
        return {
            blogList:[],
            subjectList:[],
            recommandClass:['selected']
        }
    },
    methods:{
        //点击推荐按钮时
        async recommandBlogs(){
            await this.getBlogList();
            // 修改其他subject的样式
            this.subjectList.forEach(item=>{
                item.selected='not-selected';
            });
            // 修改推荐的样式
            this.recommandClass=['selected'];
        },
        getSubjectList(){
            let that=this;
            that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/subjects'
            }).then((res)=>{
                that.subjectList=res.data;
                that.subjectList.forEach(item=>{
                    // 为item添加selected属性方便切换样式
                    that.$set(item,'selected','not-selected');
                })
            });
        },
        // 根据subjectId获取Blog
        async getBlogsBySubjectId(id){
            // this.showBlogList=this.blogList.filter(item=>{
            //     if(item.subjects){
            //         return item.subjects.some(value=>value.id===id);
            //     }
            //     return false;
            // });
            let res=await this.getBlogList();
            console.log(this.blogList)
            this.blogList=res.filter(item=>item.subjects.some(sub=>sub.id===id));
            console.log(this.blogList)
            this.recommandClass=['not-selected'];
            this.subjectList.filter(item=>item.id===id)[0].selected='selected';
            this.subjectList.filter(item=>item.id!==id).forEach(item=>item.selected='not-selected')
        },
        //获取所有Blog
        getBlogList(){
            let that=this;
            return that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/blogs'
            }).then((res)=>{
                that.blogList=res.data;
                return that.blogList;
            });
        },
        toBlog(id){
            //跳往某篇文章
            this.$router.push({path:'/blogs/'+id});
        },
        toEdit(id){//修改某篇文章
            this.$router.push({path:'/edit',query:{id:id,type:'edit'}});
        },
        deleteBlog(id){//删除某篇文章
            //这里要注意，filter方法并不会响应式，因此我们采用splice方法
            // 先找到下标
            let index=this.blogList.find(item=>item.id===id);
            if(!index){
                this.$message.error('请不要重复删除');
                return;
            }
            this.blogList.splice(index,1);//删除该Blog
            console.log(this.blogList);
            let that=this;
            that.$axios({
                method:'DELETE',
                url:'http://42.192.180.142:3000/blogs/'+id
            }).then((res)=>{
                //
            });
        }
    }
}
</script>