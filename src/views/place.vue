<template>
    <el-container>
            <el-footer>
               <div style="margin-left: 40px;display:flex;justify-content: space-around">
                     <div>机组:   #4组</div> 
                      <div>实时时间: {{time}}</div>
                      <div>实时转速: {{rotate}}</div>
                      <div>状态: {{item}}</div>
                    </div>
            </el-footer>
        </el-container>
</template>

<script>
    import {heads,footers} from '../api/overall/monitoring'
    export default {
            data() {
            
            return {
                radio4: '1',
                id: '1',
                item : '',
                name : '',
                time : '',
                rotate: '',
            
            };
            },
       created(){
            footers(this.id).then(res=>{
                this.time= res.data.data.ticktime;
                this.rotate = res.data.data.zsval
            }),
            heads(this.id).then(res=>{
                    this.item= res.data.data.devicestatus;
                    this.name = res.data.data.descc
                    console.log(res.data.data.devicestatus)
             })
      }
    }  

</script>


<style>
 .el-footer {
        line-height: 50px;
        font-weight: bold;
    }
    .select{
        margin: 20px 40px 0 20px;
        color: #000;
        text-indent: 2px;
    }
     .el-header i{
        font-size: 20px;
        color: #fff;
    }
    .el-main i{
        font-size: 15px;
    }
    .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .el-footer{
        background-color: rgb(235,250,254);
    }

</style>