<template>
  <basic-container>
    <Heads />
    <el-main>
      <div class="box1">
        <div>
          轴承名称:
          <el-select v-model="axleName" clearable placeholder="轴承一">
            <el-option
              v-for="name in options"
              :key="name.value"
              :label="name.label"
              :value="name.value"
            ></el-option>
          </el-select>
          <el-radio-group v-model="radio" style="margin-left: 20px;">
            <el-radio :label="3">三轴</el-radio>
            <el-radio :label="6">1#X</el-radio>
            <el-radio :label="9">1#Y</el-radio>
            <el-radio :label="12">1#V</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="box2">
        <div>
          选择时间段:
          <el-select v-model="time" clearable placeholder="最近2分钟">
            <el-option
              v-for="time in options1"
              :key="time.value"
              :label="time.label"
              :value="time.value"
            ></el-option>
          </el-select>
        </div>
        <div class="aside">
          实时更新?
          <el-switch v-model="value1" active-color="#13ce66" inactive-color="#eee"></el-switch>
          <el-button
            style="background-color: #409EFF;color: #fff;margin-left: 30px"
            icon="el-icon-search"
          >立即查询</el-button>
        </div>
      </div>
      <div ref="baud1" style="width: 99%;height:150px;margin-top: 30px"></div>
      <div ref="baud2" style="width: 99%;height:250px;margin-top: 30px"></div>
    </el-main>
    <Place />
  </basic-container>
</template>

<script>
// import option from "../../../module/peak";
import Heads from "../../heads";
import Place from "../../place";
export default {
  name: "baud",
  data() {
    return {
      radio4: "1",
      id: "1",
      item: [],
      name: "",
      time: "",
      rotate: "",
      option1: {
        title: {
          text: "波特图",
          left: "center",
          align: "right"
        },
        color: ["rgb(30, 30, 247)"],
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'cross',
        //         crossStyle: {
        //             color: '#999'
        //         }
        //     }
        // },
        legend: {
          // 图例样式
          right: 30,
          top: "45%",
          orient: "vertical",
          icon: "line",
          selectedMode: false,
          textStyle: {
            color: "#000",
            fontSize: 16
          },
          data: ["1#X"]
        },
        xAxis: {
          name: "",
          type: "category",
          boundaryGap: false, // 不环绕刻度线,
          data: [
            "16:11:30",
            "16:17:00",
            "16:17:30",
            "16:18:00",
            "16:18:50",
            "16:19:05",
            "16:20:00"
          ]
        },
        yAxis: [
          {
            name: "相位（度）",
            type: "value",
            max: 144,
            min: 136,
            splitLine: {
              show: false // 是否显示分割线
            }
          }
        ],
        series: [
          {
            name: "1#X",
            label: {
              show: true,
              position: "right"
            },
            data: [141, 137, 138, 142, 141.5, 137.5, 140],
            type: "line",
            // 线条颜色
            lineStyle: {
              color: "rgb(30, 30, 247)"
            },
            symbol: "none" // 拐点标记的图形
          }
        ]
      },
      option2: {
        title: {
          text: "",
          left: "center",
          align: "right"
        },
        color: ["rgb(12, 6, 212)", "rgb(128, 63, 72)", "rgb(86, 201, 87)"],
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'cross',
        //         crossStyle: {
        //             color: '#999'
        //         }
        //     }
        // },
        legend: {
          // 图例样式
          right: 0,
          top: "45%",
          orient: "vertical",
          icon: "line",
          selectedMode: false,
          textStyle: {
            color: "#000",
            fontSize: 16
          },
          data: ["1#X通频", "1#X一倍频", "1#X二倍频"]
        },
        xAxis: {
          name: "",
          type: "category",
          boundaryGap: false, // 不环绕刻度线,
          data: [
            "16:11:30",
            "16:17:00",
            "16:17:30",
            "16:18:00",
            "16:18:50",
            "16:19:05",
            "16:20:00"
          ]
        },
        yAxis: [
          {
            name: "幅值（um）",
            max: 144,
            min: 136,
            type: "value",
            splitLine: {
              show: false // 是否显示分割线
            }
          }
        ],
        series: [
          {
            name: "1#X通频",
            label: {
              show: true,
              position: "right"
            },
            data: [141, 141, 141, 141, 141, 141, 141],
            type: "line",
            // 线条颜色
            lineStyle: {
              color: "rgb(12, 6, 212)"
            },
            symbol: "none" // 拐点标记的图形
          },
          {
            name: "1#X一倍频",
            label: {
              show: true,
              position: "right"
            },
            data: [140.5, 140.5, 140.5, 140.5, 140.5, 140.5, 140.5],
            type: "line",
            // 线条颜色
            lineStyle: {
              color: "rgb(128, 63, 72)"
            },
            symbol: "none" // 拐点标记的图形
          },
          {
            name: "1#X二倍频",
            label: {
              show: true,
              position: "right"
            },
            data: [136.5, 136.5, 136.5, 136.5, 136.5, 136.5, 136.5],
            type: "line",
            // 线条颜色
            lineStyle: {
              color: "rgb(86, 201, 87)"
            },
            symbol: "none" // 拐点标记的图形
          }
        ]
      },
      options: [
        {
          value: "选项1",
          label: "轴承一"
        },
        {
          value: "选项2",
          label: "轴承二"
        },
        {
          value: "选项3",
          label: "轴承三"
        },
        {
          value: "选项4",
          label: "轴承四"
        },
        {
          value: "选项5",
          label: "轴承五"
        }
      ],
      options1: [
        {
          value: "选项1",
          label: "最近2分钟"
        },
        {
          value: "选项2",
          label: "最近10分钟"
        },
        {
          value: "选项3",
          label: "最近20分钟"
        },
        {
          value: "选项4",
          label: "最近40分钟"
        },
        {
          value: "选项5",
          label: "最近1小时"
        }
      ],
      axleName: "",
      value1: true,
      radio: 3
    };
  },
  created() {
    // this.item = ;
    // console.log(this.item);
  },
  mounted() {
    let myChart1 = this.$echarts.init(this.$refs.baud1);
    myChart1.setOption(this.option1);
    let myChart2 = this.$echarts.init(this.$refs.baud2);
    myChart2.setOption(this.option2);
  },
  components: { Place, Heads }
};
</script>

<style scoped>
.el-main {
  background-color: #fff;
  color: #333;
  height: 85vh;
}
.select {
  margin: 20px 40px 0 20px;
  color: #000;
  text-indent: 2px;
}

.el-main i {
  font-size: 15px;
}
.box1,
.box2 {
  display: flex;
  justify-content: flex-start;
  margin: 10px 10px 0 10px;
  padding: 0;
}

.aside {
  line-height: 110px;
  margin-left: 20px;
}
.el-select {
  margin-top: 40px;
}
.el-scrollbar__wrap {
  overflow: hidden;
}
</style>