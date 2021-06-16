<template>
    <div class="blog-container">
        <div class="blog-dirs">
            <a ref="header" :style="{'font-size':h.style.fontSize,'margin-left':h.style.marginLeft}" 
                v-for="h in dirs" 
                :key="h.text" 
                @click="scrollControl(h)">{{h.text}}</a>
        </div>
        <div class="blog-show">
            <h1 class="blog-title">
                {{blog.title}}
            </h1>
            <div class="blog-content" v-html="blog.preHtml" v-highlight>
            </div>
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
            },
            dirs:[],
            styles:[
                {
                    fontSize:'1.2rem',
                    marginLeft:'0%'
                },
                {
                    fontSize:'1.1rem',
                    marginLeft:'12%'
                },
                {
                    fontSize:'1rem',
                    marginLeft:'24%'
                },
                {
                    fontSize:'0.9rem',
                    marginLeft:'36%'
                },
                {
                    fontSize:'0.8rem',
                    marginLeft:'48%'
                }
            ],
            baseUrl:'http://42.192.180.142:3000/blogs/'
        }
    },
    created:function(){
        this.getBlogById(this.id);
    },
    methods:{
        getBlogById(id){
            this.getRequest(this.baseUrl+id,{},(res)=>{
                this.blog=res.data;
            },(reason)=>{
                alert(reason);
            }).then(this.generateDirs);
        },
        generateDirs(){
            let headers=document.getElementsByClassName('blog-content')[0].children;
            for(let i=0;i<headers.length;i++){
                if(headers[i].tagName.indexOf('H')===-1)
                    continue;
                let level=parseInt(headers[i].tagName[1]);
                console.log(level)
                this.dirs.push({
                    text:headers[i].textContent,
                    style:this.styles[level-2],
                    node:headers[i]
                });
            }
            console.log(this.dirs)
        },
        getRequest(url,params,resolve,reject){
            return this.$axios({
                url,
                params
            }).then(resolve,reject);
        },
        scrollControl(h){
            window.scrollTo(0,h.node.offsetTop-100)
        }
    }
}
</script>

<style scoped src="../../css/main/blog.css">

</style>