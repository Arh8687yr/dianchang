<template>
    <basic-container>
            <Heads />
            <el-main>
                <el-table
                    :data="tableData"
                    height="250"
                    border
                    style="width: 100%">
                    <el-table-column
                    align="center"
                    prop="date"
                    label="通道名称"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    align="center"
                    prop="date"
                    label="峰值或有效值"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    align="center"
                    prop="date"
                    label="1X峰值"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    align="center"
                    prop="date"
                    label="1X相位"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    align="center"
                    prop="date"
                    label="2X幅值"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    align="center"
                    prop="date"
                    label="2X相位"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    align="center"
                    prop="name"
                    label="0.5X幅值"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    align="center"
                    label="间隙或幅值">
                    </el-table-column>
                </el-table>
                     <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage2"
                        :page-sizes="[5]"
                        :page-size="5"
                        :total="100">
                        </el-pagination>
            </el-main>
            <Place />
    </basic-container>
</template>

<script>
import Heads from '../../heads'
import Place from '../../place'
    export default {
    data() {
      return {
        radio: '1',
        id: '1',
        item : '',
        name : '',
        radio1: '0',
        time : '',
        rotate: '',
        value: ''
      };
    },
    components:{Place,Heads} ,
      mounted() {
   
    }    
    }
</script>

<style  scoped>
    
    .el-header, .el-footer {
        line-height: 50px;
        font-weight: bold;
    }
    .el-main {
        background-color: #fff;
        color: #333;
        height: 75vh;
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
</style>>