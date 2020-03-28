<template>
    <basic-container>
       <Heads />
            <el-main>
                <div class="box">
                <el-time-select
                    icon ="el-icon-date"
                    class="select"
                    v-model="value"
                    :picker-options="{
                        start: '00:00',
                        step: '00:15',
                        end: '23:45'
                    }"
                    placeholder="   选择时间">
                </el-time-select>
                <el-button style="color: #000 ;margin-right: 30px" icon="el-icon-bank-card" >选择图谱</el-button>
               日期时间: <el-date-picker
                v-model="value2"
                type="datetimerange"
                align="right"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00', '08:00:00']">
                </el-date-picker>
                <el-button style="background:#409EFF;color:#fff;margin-left: 50px" icon="el-icon-search">查询</el-button>
                </div>
               <div class="content">
                    <div ref="trend" style="width: 620px;height:400px;margin-top: 30px"></div>
                    <div ref="ratio" style="width: 620px;height:400px;margin-top: 30px"></div>
                    <div ref="peak" style="width: 620px;height:400px;margin-top: 30px"></div>
                    <div ref="echart" style="width: 620px;height:400px;margin-top: 30px"></div>
                </div>
            </el-main>
            <Place />
    </basic-container>
</template>

<script>
import option from '../../../module/trend'
import option1 from '../../../module/ratio'
import option2 from '../../../module/peak'
import option3 from '../../../module/echart'
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
        rotate: ''
      };
    },
        components:{Place,Heads} ,
      mounted() {
        let myChart = this.$echarts.init(this.$refs.trend);
            myChart.setOption(option);
        let myChart1 = this.$echarts.init(this.$refs.ratio)
            myChart1.setOption(option1) 
        let myChart2 = this.$echarts.init(this.$refs.peak)
            myChart2.setOption(option2) 
        let myChart3 = this.$echarts.init(this.$refs.echart)
        myChart3.clear()
            myChart3.setOption(option3) 
      } ,
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
    .el-main {
        background-color: #fff;
        color: #333;
        height: 120vh;
        font-weight: bold;
    }
    .box{
        padding-bottom: 25px;
        margin: 10px 10px 0 10px;
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
        background-color: skyblue;
    }
    .statuscolor{
        width: 20px;
        height: 20px;
        background-color: aquamarine;
        margin: 15px 0 0 10px
    }
</style>