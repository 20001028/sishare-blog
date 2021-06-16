<template>
    <div class="blog-list-container">
        <div class="subject-list">
            <a :class="['recommand-blogs',recommandClass]" @click="recommandBlogs">推荐</a>
            <a :class="[sub.selected]" v-for="sub in subjectList" :key="sub.id" @click="getBlogsBySubjectId(sub.id)">
                {{sub.name}}
            </a>
            <a class="more-sub">查看更多</a>
        </div>
        <div class="blog-list">
            <div v-for="blog in showBlogList" :key="blog.id" class="blog-list-item">
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
            showBlogList:[],
            subjectList:[],
            recommandClass:'selected'
        }
    },
    methods:{
        async recommandBlogs(){
            await this.subjectList.forEach(item=>{
                item.selected='not-selected';
            });
            this.showBlogList=this.blogList;
            this.recommandClass='selected';
        },
        getSubjectList(){
            let that=this;
            that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/subjects'
            }).then((res)=>{
                that.subjectList=res.data;
                that.subjectList.forEach(item=>{
                    that.$set(item,'selected','not-selected');
                })
            });
        },
        getBlogsBySubjectId(id){
            this.showBlogList=this.blogList.filter(item=>{
                if(item.subjects){
                    return item.subjects.some(value=>value.id===id);
                }
                return false;
            });
            this.recommandClass='not-selected';
            this.subjectList.filter(item=>item.id===id)[0].selected='selected';
            this.subjectList.filter(item=>item.id!==id).forEach(item=>item.selected='not-selected')
        },
        getBlogList(){
            let that=this;
            that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/blogs'
            }).then((res)=>{
                that.blogList=res.data;
                console.log(that.blogList.length)
                that.showBlogList=that.blogList;
            });
        },
        toBlog(id){
            this.$router.push({path:'/blogs/'+id});
        },
        toEdit(id){
            this.$router.push({path:'/edit',query:{id:id,type:'edit'}});
        },
        deleteBlog(id){
            let that=this;
            that.$axios({
                method:'PUT',
                url:'http://42.192.180.142:3000/blogs/'+id
            }).then((res)=>{
                that.getBlogList();
            })
        }
    }
}
</script>