<template>
    <basic-container>
        <Heads />
            <el-main>
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
                                :key="item.value2"
                                :label="item.label"
                                :value="item.value2">
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
                 <div ref="wave" style="width: 100%;height:450px;margin-top: 30px"></div>
                 <el-button style="background-color: #409EFF;color: #fff;float:right;margin-right: 40px" icon ="el-icon-refresh-right">刷新</el-button>
                 <div style="color: red;text-align: center;line-height: 250px">暂无图谱</div>
            </el-main>
            <Place />
    </basic-container>
</template>

<script>
import option from '../../../module/wave'
import Heads from '../../heads'
import Place from '../../place'
    export default {
    data() {
      return {
          options1: [{
          value2: '选项1',
          label: '最近2分钟'
        }, {
          value2: '选项2',
          label: '最近10分钟'
        }, {
          value2: '选项3',
          label: '最近20分钟'
        }, {
          value2: '选项4',
          label: '最近40分钟'
        }, {
          value2: '选项5',
          label: '最近1小时'
        }],
        value2: '',
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
        value: '',
        value1:true,
        radio: 6,
        radio1: '1'
      };
    },
       components:{Place,Heads} ,
      mounted() {
        let myChart = this.$echarts.init(this.$refs.wave);
            myChart.setOption(option);
      } ,
    }    
    
</script>

<style scoped>

    .el-main {
        background-color: #fff;
        color: #333;
        height: 120vh;
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
    }
    .aside{
        line-height: 110px;
        margin-left: 20px;
    }
    .el-select{
        margin-top: 40px;
    }
</style>