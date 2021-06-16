<template>
    <div class="text-container">
        <div>
            <img height="80px" src="http://www.uugai.com/logoa/ziphp/ziti_a.php?txt=%E6%80%9D%E4%BA%ABCode&txtfont=z206.ttf&minitxt=Si%20Share%20Code">
        </div>
        <a @click="toMain">Blogs</a>
        <a @click="toGuide">Guidelines</a>
        <a>Author</a>
        <a>Project Center</a>
        <input type="text" placeholder="搜索关键字" style="margin-left:5rem;">
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