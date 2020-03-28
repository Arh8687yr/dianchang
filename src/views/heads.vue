<template>
        <el-container>
            <el-header>
                <div>
                    <el-button style="background:#409EFF;" icon="el-icon-s-marketing"></el-button>
                    <el-button style="background:#409EFF;" icon="el-icon-receiving"></el-button>
                    <el-button style="background:#409EFF;" icon="el-icon-data-line"></el-button>
                    <el-button style="background:#409EFF;" icon="el-icon-data-analysis"></el-button>
                    <el-button style="background:#409EFF;" icon="el-icon-aim"></el-button>
                    </div>
                    <div style="margin-left: 40px;display:flex;">
                        <div>采集</div>
                    </div>
                    <div style="margin-left: 40px;display:flex;">
                        <div>机组状态:</div>    
                        <div class="statuscolor"></div>
                        <div style="margin-left: 10px;">{{item}}</div>     
                        <div style="margin-left: 30px;">{{name}}</div>
                    </div>
                    <div style="margin-left: 40px;">
                      设备组:   <el-radio v-model="radio4" label="1" fill="#4ECAEF" style="margin-left:10px">#4组</el-radio>
                    </div>
            </el-header>
        </el-container>
</template>

<script>
    import {heads} from '../api/overall/monitoring'
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
                heads(this.id).then(res=>{
                    this.item= res.data.data.devicestatus;
                    this.name = res.data.data.descc
                    console.log(res.data.data.devicestatus)
                })
            }
        }
        </script>

<style>
    .el-header, .el-footer {
        line-height: 50px;
        font-weight: bold;
    }
    .el-header{
        display: flex;
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
        background-color: #409EFF;
    }
    .statuscolor{
        width: 20px;
        height: 20px;
        background-color: aquamarine;
        margin: 15px 0 0 10px
    }
</style>