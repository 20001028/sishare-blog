<template>
    <div class="blog-container">
        <h1 class="blog-title">
            {{blog.title}}
        </h1>
        <div class="blog-content" v-html="blog.content" v-highlight>
        </div>
    </div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            blog:{
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
            that.blog.content=res.data.html;
            that.blog.title=res.data.article.title;
        })
    },
    methods:{

    }
}
</script>

<style scoped src="../../css/main/blog.css">

</style>