<template>
    <basic-container>
            <Heads />
            <el-main>
                      <!-- <el-button style="background:#409EFF;color: #fff;margin-right: 15px" icon="el-icon-s-release">选择故障类型</el-button> -->
                    轴承名称: <el-select v-model="value" clearable placeholder="轴承一">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                         <el-radio-group v-model="radio" style="margin-left: 20px;">
                            <el-radio :label="3">三轴</el-radio>
                            <el-radio :label="6">1#X</el-radio>
                            <el-radio :label="9">1#Y</el-radio>
                            <el-radio :label="12">1#V</el-radio>
                        </el-radio-group>
                <div class="box">
                    <div>
                        选择时间段: <el-select v-model="value" clearable placeholder="最近2分钟">
                                <el-option
                                v-for="item in options1"
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
                    <div ref="trouble1" style="width: 100%;height:450px;margin-top: 30px"></div>
                    <div ref="trouble2" style="width: 100%;height:450px;margin-top: 30px"></div>
            </el-main>
            <Place />
    </basic-container>
</template>

<script>
import option from '../../../module/trouble'
import option1 from '../../../module/trouble1'
import option2 from '../../../module/trouble2'
import Heads from '../../heads'
import Place from '../../place'
    export default {
    data() {
      return {
        radio4: '1',
        id: '1',
        item : '',
        name : '',
        time : '',
        rotate: '',
        options: [{
          value: '选项1',
          label: '轴承一'
        }, {
          value: '选项2',
          label: '轴承二'
        }, {
          value: '选项3',
          label: '轴承三'
        }, {
          value: '选项4',
          label: '轴承四'
        }, {
          value: '选项5',
          label: '轴承五'
        }],
        options1: [{
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
        }],
        value: '',
        value1:true,
        radio: 3
      };
    },
      mounted() {
          let myChart = this.$echarts.init(this.$refs.trouble);
            myChart.setOption(option);
          let myChart1 = this.$echarts.init(this.$refs.trouble1);
            myChart1.setOption(option1);
          let myChart2 = this.$echarts.init(this.$refs.trouble2);
            myChart2.setOption(option2);
      } ,
      components:{Place,Heads}
    }    
    
</script>

<style scoped>
    
   .el-main {
        background-color: #fff;
        color: #333;
        height: 200vh;
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
        justify-content: flex-start;
        margin: 10px 10px 0 10px;
        padding: 0;
    }
    .aside{
        line-height: 110px;
        margin-left: 20px;
    }
    .el-select{
        margin-top: 40px;
    }
</style>