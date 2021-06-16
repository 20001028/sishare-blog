<template>
    <el-dialog
        :title="linkDialog.title"
        :visible.sync="linkDialog.visible"
        width="50%">
        <el-input placeholder="请输入内容" v-model="linkDialog.text">
            <template slot="prepend">alt</template>
        </el-input>
        <p style="width=30px;height:10px;visibility:hidden;"></p>
        <el-input placeholder="请输入链接地址" v-model="linkDialog.href" style="margin-bottom:20px;">
            <template slot="prepend">link</template>
        </el-input>
        <!-- <el-upload
            v-if="linkDialog.type==='img'"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload> -->
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancelInsert" ref="zzg">取 消</el-button>
            <el-button type="primary" @click="insertLink">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    linkDialog:{},
    props:['linkDialog','handleTextarea','blog'],
    created(){
        //console.log(this.$refs)
    },
    inject:['blog'],
    data:function(){
        return{
            linkDialog:{}
        }
    },
    methods:{
        cancelInsert(){
            this.linkDialog.text='';
            this.linkDialog.href='';
            this.linkDialog.visible=false;
        },
        insertLink(){
            let type=this.linkDialog.type==='link' ? '' : '!';//判断是链接还是图片
            let method=(textarea,startPos,value)=>{
                textarea.value=value.substring(0,startPos)+type+'['+this.linkDialog.text+']'
                +'('+this.linkDialog.href+')'+value.substring(startPos,value.length);
            }
            this.handleTextarea(method);
            //关闭对话框
            this.linkDialog.visible=false;
            //将对话框内部内容清除，避免污染下次打开
            this.linkDialog.text='';
            this.linkDialog.href='';
        },
    }
}
</script>