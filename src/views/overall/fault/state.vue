<template>
    <basic-container>
            <Heads /> 
            <el-main>
                <div class="box">
                    <div style="margin-left: 30px">
                        选择时间段: <el-select v-model="value" clearable placeholder="最近2分钟">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="aside">
                            实时更新? <el-switch
                                v-model="value1"
                                active-color="#13ce66"
                                inactive-color="#eee">
                            </el-switch>
                            <el-button style="background-color: #409EFF;color: #fff;margin-left: 30px" icon ="el-icon-search">立即查询</el-button>
                        </div>
                </div>
                    <div ref="trouble" style="width: 100%;height:450px;margin-top: 30px"></div>
            </el-main>
            <Place />
    </basic-container>
</template>

<script>
import option from '../../../module/trend'
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
        value: '',
        value1:true,
        options: [{
          value: '选项1',
          label: '最近2分钟'
        }, {
          value: '选项2',
          label: '最近10分钟'
        }, {
          value: '选项3',
          label: '最近20分钟'
        }, {
          value: '选项4',
          label: '最近40分钟'
        }, {
          value: '选项5',
          label: '最近1小时'
        }]
      };
       
    },
    components:{Place,Heads} ,
      mounted() {
          let myChart = this.$echarts.init(this.$refs.trouble);
            myChart.setOption(option);
      } ,

    }    
    
</script>

<style scoped>
    
    .el-main {
        background-color: #fff;
        color: #333;
        height: 70vh;
    }
    .select{
        margin: 20px 40px 0 20px;
        color: #000;
        text-indent: 2px;
    }

    .el-main i{
        font-size: 15px;
    }
    .box{
        display: flex;
        justify-content: space-between;
        margin: 10px 10px 0 10px;
        padding: 0;
    }
    .aside{
        line-height: 110px;
        margin-right: 30px;
    }
    .el-select{
        margin-top: 40px;
    }
</style>