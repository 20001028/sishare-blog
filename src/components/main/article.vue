<template>
    <div class="article-container">
        <h1 class="article-title">
            {{article.title}}
        </h1>
        <div class="article-content" v-html="article.content" v-highlight>
        </div>
    </div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            article:{
                title:'',
                content:''
            }
        }
    },
    created:function(){
        let that=this;
        that.$axios({
            method:'GET',
            url:'http://42.192.180.142:3000/articles/'+that.id,
        }).then((res)=>{
            console.log(res);
            that.article.content=res.data.html;
            that.article.title=res.data.article.title;
        })
    },
    methods:{

    }
}
</script>

<style scoped>
.article-container{
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    box-sizing: content-box;
    padding: 1.875rem;
}

.article-container h1{
    font-weight: 500;
    font-size: 2rem;
    cursor: pointer;
    margin-bottom: 1rem;
}

.article-content{
    line-height: 1.6;
    margin-bottom: 1.31rem;
}
</style>