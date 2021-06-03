<template>
    <div class="text-container">
            <div>
                <img>
            </div>
            <a @click="goToMain">文章列表</a>
            <a @click="goToGuide">建站教程</a>
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
        goToMain(){
            this.$router.push({path:'/articles'});
        },
        goToGuide(){
            this.$router.push({path:'/guide'});
        },
        launch(){
            this.$router.push({path:'/write'});
        },
        login(){
            //事件
            this.$emit('login');
        }
    }
}
</script>

<style scoped>
.text-container{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 80%;
    padding-right: 12px;
    padding-left: 12px;
}

.text-container a{
    display: block;
    color: rgba(0,0,0,.5);
    padding-left: .75rem;
    padding-right: .75rem;
    text-decoration: none;
    font-weight: 700;
    line-height: 24px;
    height: 40px;
    box-sizing: border-box;
    padding: 8px 16px 8px 16px;
    cursor: pointer;
}

.text-container a:hover{
    color: #004a2e;
}

.text-container a:last-child{
    margin-left: 5rem;
}

.text-container input{
    height: 38px;
    width: 360px;
    margin-left: 200px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    padding-left: 10px;
    display: inline-block;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.text-container input:focus{
    color: #495057;
    background-color: #fff;
    border-color: #00c97e;
    outline: 0;
    /* box-shadow: 0 0 0 0.2rem rgb(0 150 94 / 25%); */
}

.text-container button{
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    color: #fff;
    background-color: #00965e;
    border-color: #00965e;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin-left: 20px;
    cursor: pointer;
}
</style>