<template>
    <div class="index-container">
        <div class="header-container">
            <Header @login="showLoginForm"/>
        </div>
        
        <div class="router-container">
            <router-view></router-view>
        </div>
        <div class="footer-container">
            <Footer />
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
const Header=()=>import('./header.vue');
const Footer=()=>import('./footer.vue')

export default {
    data(){
        return {
            loginDialog:{
                visible:false,
                username:'',
                password:'',
            }
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
        showLoginForm(){
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
 
<style scoped src="../../css/common/index.css">

</style>