<template>
    <div class="article-list-container">
        <!-- <div class="classify-list">
            <h3>分类</h3>
            <a v-for="item in classList" :key="item.id" :class="['iconfont',item.icon]">
                {{item.name}}
            </a>
            <a class="class-new iconfont icon-zengjiatianjiaxinzenggengduo">
                添加新的分类
            </a>
        </div> -->
        <div class="article-list">
            <div v-for="article in articleList" :key="article.id" class="article-list-item">
                <div class="article-title">
                    <a @click="goToArticle(article.id)">{{article.title}}</a>
                </div>
                <div class="article-subjects">
                    <div v-for="sub in article.subjects" :key="sub.id" class="sub-item">
                        <a>{{sub.name}}</a>
                    </div>
                </div>
                <div class="article-detail">
                    <a class="article-time">
                        <a class="iconfont icon-shijianshi" style="color:yellow;"></a>
                        {{article.time}}
                    </a>
                    <a class="article-reading">
                        <a class="iconfont icon-liulan" style="font-size:14px"></a>
                        {{article.reading}}
                    </a>
                    <a class="article-edit" style="cursor:pointer;" @click="goToEdit(article.id)">
                        <a class="iconfont icon-bianji"></a>
                        编辑
                    </a>
                    <a class="article-delete" style="cursor:pointer;" @click="deleteArticle(article.id)">
                        <a class="iconfont icon-bianji"></a>
                        删除
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../css/main/article-list.css';

export default {
    created(){
        this.getArticleList();
    },
    data(){
        return {
            articleList:[
            ]
        }
    },
    methods:{
        getArticleList(){
            let that=this;
            that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/articles'
            }).then((res)=>{
                that.articleList=res.data;
                that.$axios({
                    method:'GET',
                    url:'http://42.192.180.142:3000/blog-subs'
                }).then((res)=>{
                    var res=res.data;
                    for(let i=0;i<that.articleList.length;i++){
                        let temp=res.filter(item=>item.id===that.articleList[i].id);
                        if(temp.length>0){
                            that.$set(that.articleList,i,temp[0]);
                        }
                    }
                });
            })
        },
        goToArticle(id){
            this.$router.push({path:'/articles/'+id});
        },
        goToEdit(id){
            this.$router.push({path:'/write',query:{id:id,type:'edit'}});
        },
        deleteArticle(id){
            // let that=this;
            // that.$axios({
            //     method:'DELETE',
            //     url:'http://42.192.180.142:3000/articles/'+id
            // }).then((res)=>{
            //     console.log(res);
            //     that.getArticleList();
            // })
        }
    }
}
</script>