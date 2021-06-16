<template>
    <div class="el-popover-header">
        <el-popover
            placement="right"
            width="150"
            trigger="hover">
            <div class="head-group" @click="emit">
                <a>二级标题</a>
                <a>三级标题</a>
                <a>四级标题</a>
                <a>五级标题</a>
                <a>六级标题</a>
            </div>
            <a slot="reference" class="iconfont icon-biaoti"></a>
        </el-popover>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
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
        emit(e){
            let dom=document.getElementsByClassName('head-group')[0];
            let index=this.eventProxy(e,dom);
            this.$emit('insert-header',index);
        }
    }
}
</script>

<style scoped>
.el-popover-header{
    height: 2rem;
    width: 2.5rem;
    margin-bottom: .25rem;
    text-align: center;
    font-size: 16px;
    opacity: 0.5;
    cursor: pointer;
}

.head-group a{
    text-align: center;
    display: block;
    line-height: 2rem;
}

.head-group a:hover{
    color: #00c97e;
    cursor: pointer;
}
</style>