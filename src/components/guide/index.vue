<template>
    <div class="guide-container" >
        <div class="left-list">
            <div class="left-list-item" v-for="item in itemList" :key="item.id">
                <div class="item-head"  @click="show(item.id)">
                    <a class="iconfont icon-gengduo"></a>
                    <a class="">{{item.title}}</a>
                    <a :class="['iconfont',item.icon]"></a>
                </div>
                <div class="item-articles" :style="{display:item.display}">
                    <a class="iconfont icon-xuhao"></a>
                    <a style="margin-left:0.2rem;">WebCaching</a>
                </div>
            </div>
        </div>
        <div class="article-container">
            <h1 class="article-title">
                {{article.title}}
            </h1>
            <div class="article-content" v-html="article.content" v-highlight>
            </div>
        </div>
    </div>
</template>

<script>
import '../../css/guide/index.css';

export default {
    data(){
        return {
            itemList:[
                {
                    id:1,
                    title:'搭建开发环境',
                    display:'none',
                    icon:'icon-xiangyou-copy',
                    articles:[
                        {
                            id:'',
                            title:''
                        }
                    ]
                },
                {
                    id:2,
                    title:'搭建开发环境',
                    display:'none',
                    icon:'icon-xiangyou-copy',
                    articles:[
                        {
                            id:'',
                            title:''
                        }
                    ]
                },
                {
                    id:3,
                    title:'搭建开发环境',
                    display:'none',
                    icon:'icon-xiangyou-copy',
                    articles:[
                        {
                            id:'',
                            title:''
                        }
                    ]
                }
            ],
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
            url:'http://42.192.180.142:3000/articles/'+'1497ba4b-9d9c-4792-9b82-f6a649a50257',
        }).then((res)=>{
            that.article.content=res.data.html;
            that.article.title=res.data.article.title;
        });
        // that.timer=setInterval(()=>{
        //     if(document.readyState==='complete'){
        //         that.loading=false;
        //         clearInterval(that.timer);
        //     }
        // },1000);
    },
    methods:{
        show(id){
            this.itemList.forEach(item=>{
                if(item.id===id){
                    if(item.display==='none'){
                        item.display='block';
                        item.icon='icon-down2';
                    }else{
                        item.display='none';
                        item.icon='icon-xiangyou-copy';
                    }
                }
            })
        }
    }
}
</script>