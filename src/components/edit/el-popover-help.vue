<template>
    <div class="el-popover-help">
        <el-popover
            placement="right"
            width="300"
            trigger="hover">
            <div class="help-group">
                <div class="help-item" v-for="helper in helpers" :key="helper.name">
                    <a>{{helper.name}}</a>
                    <a>{{helper.text}}</a>
                    <button data-clipboard-action="copy" :class="helper.name" @click="copy(helper.name,helper.text)">复制</button>
                </div>
            </div>
            <a slot="reference" class="iconfont icon-bangzhu"></a>
        </el-popover>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            helpers:[
                {
                    name:'加粗',
                    text:'**你的内容**'
                },
                {
                    name:'斜体',
                    text:'*你的内容*'
                },
                {
                    name:'标题',
                    text:'默认为h1,#开头'
                },{
                    name:'h2-h5',
                    text:'#*{1-5}'
                },
                {
                    name:'代码块',
                    text:'```你的内容```'
                },
                {
                    name:'链接',
                    text:'[显示内容](链接url)'
                },
                {
                    name:'图片',
                    text:'![alt](图片url)'
                },
                {
                    name:'有序列表',
                    text:'1. \\n2. \\n3. '
                },
                {
                    name:'无序列表',
                    text:'+ \\n+ \\n+ '
                }
            ]
        }
    },
    methods:{
        //事件代理
        eventProxy(e,dom){
            let children=dom.children;
            for(let i=0;i<children.length;i++){
                if(children[i]===e.target)
                    return i;
            }
            return -1;
        },
        copy(name,text){
            console.log(name,text)
            let clipboard=new ClipboardJS('.'+name,{
                text:()=>{
                    return text;
                }
            });
            clipboard.on('success',function(e){
                console.log('复制成功')
            });
            clipboard.on('error',function(e){
                console.log(e);
            })
        }
    }
}
</script>

<style scoped>
.el-popover-help{
    height: 2rem;
    width: 2.5rem;
    margin-bottom: .25rem;
    text-align: center;
    font-size: 16px;
    opacity: 0.5;
    cursor: pointer;
}

.help-group{
    display: flex;
    flex-direction: column;
}

.help-item{
    line-height: 2rem;
    display: flex;
}

.help-item a:first-child{
    text-align: center;
    width: 20%;
    font-weight: 600;
}

.help-item a:nth-child(2){
    text-align: center;
    width: 60%;
}

.help-item button{
    width: 20%;
    text-align: right;
    background-color: white;
    border: none;
}

.help-item button:hover{
    color: #00c97e;
    cursor: pointer;

}
</style>