<template>
    <el-dialog
        :title="subjectDialog.title"
        :visible.sync="subjectDialog.visible"
        width="50%">
        <div class="subjects-container">
            <a>所有专题</a>
            <div class="all-subjects">
                <div v-for="sub in allSubjects" :key="sub.id" class="sub-item">
                    <a @click="addSubjectToBlog(sub)">{{sub.name}}</a>
                    <a class="subject-delete iconfont icon-shanchu"></a>
                </div>
            </div>
            <a>我的专题(至少添加一个)</a>
            <div class="my-subjects">
                <div v-for="sub in blogSubjects" :key="sub.id" class="sub-item">
                    <a>{{sub.name}}</a>
                    <a class="subject-delete iconfont icon-shanchu" @click="deleteSubjectFromBlog(sub.id)"></a>
                </div>
            </div>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props:['subjectDialog','blogSubjects'],
    async created(){
        await this.getAllSubjects();
    },
    data(){
        return{
            allSubjects:[],
        }
    },
    methods:{
        getAllSubjects(){
            let that=this;
            that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/subjects'
            }).then((res)=>{
                that.allSubjects=res.data;
            });
        },
        addSubjectToBlog(subject){
            let that=this;
            if(that.blogSubjects.length>=5){
                this.$message.error('不能超过5个');
                return;
            }
            // 如果已经有了，return
            let filters=that.blogSubjects.filter(item=>item.id===subject.id);
            if(filters.length>0)
                return;
            // 如果没有，push进去
            that.blogSubjects.push(subject);
            if(!this.$route.query.id)
                return
            that.$axios({
                method:'POST',
                url:'http://42.192.180.142:3000/blogs/blog-sub',
                data:{
                    blogId:that.$route.query.id,
                    subId:subject.id
                }
            }).then((res)=>{
                console.log(res);
            });
        },
        deleteSubjectFromBlog(id){
            let index=this.blogSubjects.find(item=>item.id===id);
            this.blogSubjects.splice(index,1);
            if(!this.$route.query.id)
                return;
            let that=this;
            that.$axios({
                method:'DELETE',
                url:'http://42.192.180.142:3000/subjects/'+that.$route.query.id+'/'+id,
            }).then((res)=>{
                console.log(res);
            });
        },
    }
}
</script>

<style scoped>
.subjects-container{
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    line-height: 2rem;
    color: #00c97e;
}

.subjects-container > a{
    font-size: 1.25rem;
    color: #004a2e;
}

.my-subjects,.all-subjects{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.sub-item{
    position: relative;
    display: flex;
    border: 1px solid rgb(231, 213, 213);
    padding: 0% 0.5rem;
    padding-right: 1.5rem;
    height: 2rem;
    border-radius: 0.25rem;
    text-align: center;
    margin-top: 1rem;
    cursor: pointer;
    margin-left: 1rem;
}

.subjects-container .sub-item:hover .subject-delete{
    display: block;
}

.sub-item a:first-child{
    justify-self: center;
    min-width: 5rem;
    text-align: center;
}

.sub-item .subject-delete{
    position: absolute;
    right: 0;
    width: 1rem;
    padding: 0% 0.25rem;
    color: red;
    display: none;
    font-size: 1.25rem;
}
</style>