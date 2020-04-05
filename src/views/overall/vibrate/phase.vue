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

      <div
        class="demo6 echart-box"
        style="width: 99%;height:450px;margin-top: 30px"
        ref="myechart"
        id="main"
      ></div>
    </el-main>

    <Place />
  </basic-container>
</template>
<script>
import Heads from "../../heads";
import Place from "../../place";
function randomData() {
  // 时间间隔 一分钟+200
  now = new Date(+now + 200);
  // 数据
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    // value: [
    //   [now.getHours(), now.getMinutes(), now.getSeconds()].join("/"),
    //   Math.round(value)
    // ]
    // 数据格式：x轴为当前时间now y轴随机数取整
    // 当前时间减去过去时间*1000  就是多少分钟前
    value: [now-200*1000, Math.round(value)]
  };
}

var data = [];
var now = new Date();
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
  data.push(randomData());
}

export default {
  name: "phase",
  components: { Place, Heads },
  data() {
    return {};
  },
  methods: {
    handleEcharts() {
      let myChart = this.$echarts.init(document.getElementById("main"));
      let option = {
        title: {
          text: "一倍频相位"
        },
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear() +
              " : " +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: data
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      this.timer = setInterval(function() {
        //data.shift();
        for (var i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }
        myChart.setOption({
          series: [
            {
              data: data
            }
          ]
        });
      }, 1000);
    }
  },
  mounted() {
    this.handleEcharts();
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
    }
  }
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
/* .demo6 {
  width: 1000px;
  height: 600px;
  background: #cce6f0;
  margin: 0 auto;
} */
</style>