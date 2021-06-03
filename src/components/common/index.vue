<template>
    <div class="index-container">
        <div class="nav-container">
            <NavBar @login="loginForm"/>
        </div>
        
 
        <div class="router-container">
            <router-view></router-view>
        </div>
        <el-dialog
                title="登录"
                :visible.sync="loginDialog.visible"
                :modal="true"
                :lock-scroll="true"
                :show-close="false"
                :close-on-click-modal="false"
                :close-on-press-escape="false"
                :center="true"
                width="50%">
                <el-input placeholder="请输入用户名" v-model="loginDialog.username">
                    <template slot="prepend">username</template>
                </el-input>
                <p style="width=30px;height:10px;visibility:hidden;"></p>
                <el-input placeholder="请输入密码" v-model="loginDialog.password">
                    <template slot="prepend">password</template>
                </el-input>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="loginDialog.visible = false">取 消</el-button>
                    <el-button type="primary" @click="login" style="background-color:#00965e;">确 定</el-button>
                </span>
        </el-dialog>
    </div>
</template>
 
<script>
import NavBar from '../common/nav-bar.vue';
//const NavBar=()=>import('../common/nav-bar.vue');

export default {
    data(){
        return {
            name:'zzg',
            loginDialog:{
                visible:false,
                username:'',
                password:'',
            }
        }
    },
    components:{
        NavBar
    },
    methods:{
        loginForm(){
            this.loginDialog.visible=true;
        },
        login(){
            let that=this;
            that.$axios({
                method:'GET',
                url:'http://42.192.180.142:3000/login',
                params:{
                    username:that.loginDialog.username,
                    password:that.loginDialog.password
                },
                withCredentials:true
            }).then((res)=>{
                that.loginDialog.visible=false;
            });
        }
    }
}
</script>
 
<style scoped>
.nav-container{
    position: sticky;
    top: 0%;
    display: flex;
    width: 100%;
    height: 41.2px;
    background-color: white;
    color: #252129;
    padding: 8px 0px;
    border-top: 2px solid #00965e;
    box-sizing: content-box;
    justify-content: center;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

.router-container{
    padding-top: 20px;
    min-height: 1000px;
    background-color: #e9ecef;
}
</style>