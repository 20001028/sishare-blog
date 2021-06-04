<template>
    <div class="text-container">
        <div>
            <img>
        </div>
        <a @click="toMain">文章列表</a>
        <a @click="toGuide">建站教程</a>
        <a>网站作者</a>
        <a>项目中心</a>
        <input type="text" placeholder="搜索关键字">
        <button class="iconfont icon-fabu" @click="launch">发布</button>
        <a @click="login">登录</a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        toMain(){
            this.$router.push({path:'/blogs'});
        },
        toGuide(){
            this.$router.push({path:'/guide'});
        },
        launch(){
            this.$router.push({path:'/edit'});
        },
        login(){
            //事件
            this.$emit('login');
        }
    }
}
</script>

<style scoped src="../../css/common/header.css">

</style>