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
var oneDay = 24 * 3600 * 1000;
var fiveMinutes = 300 * 1000;
var timestr = "2016/2/18 00:00:00";
var startTime = +new Date(timestr) - fiveMinutes;
var data_in = [
  918.32,
  902.51,
  900.41,
  873.43,
  885.39,
  897.63,
  892.44,
  879.04,
  850.83,
  848.52,
  844.87,
  834.54,
  832.48,
  815.48,
  811.23,
  821.2,
  805.1,
  794.49,
  801.23,
  788.8,
  769.7,
  789.8,
  763.46,
  758.57,
  773.49,
  764.45,
  739.66,
  757.55,
  731.12,
  724.06,
  732.7,
  723.8,
  714.91,
  723.46,
  705.1,
  708.9,
  723.75,
  703.06,
  684.51,
  692.63,
  683.14,
  671.95,
  691.97,
  684.04,
  667.59,
  688.56,
  659.01,
  652.39,
  670.98,
  638.1,
  655.85,
  627.21,
  648.82,
  631.68,
  614.94,
  642.69,
  626.22,
  613.44,
  641.15,
  613.9,
  601.39,
  623.22,
  602.94,
  589.9,
  612.01,
  590.85,
  591.51,
  585.67,
  559.47,
  557.43,
  518.2,
  504.63,
  506.67,
  512.66,
  440.93,
  614.94,
  642.69,
  626.22,
  613.44,
  641.15,
  613.9,
  601.39,
  623.22,
  602.94,
  598.28,
  593.18,
  625.85,
  625.43,
  611.52,
  660.33,
  669.41,
  707.86,
  729.56,
  728.72,
  770.35,
  800.78,
  791.52,
  797.62,
  808.94,
  625.43,
  611.52,
  660.33,
  669.41,
  707.86,
  729.56,
  728.72,
  770.35,
  800.78,
  676.64,
  598.28,
  593.18,
  625.85,
  625.43,
  611.52,
  660.33,
  669.41,
  707.86,
  729.56,
  728.72,
  770.35,
  800.78,
  791.52,
  797.62,
  808.94,
  817.76,
  797.77,
  806.65,
  763.81,
  771.01,
  796.27,
  777.58,
  776.37,
  821.18,
  814.54,
  832.37,
  853.91,
  870.55,
  861.75,
  888.66,
  888.6,
  910.95,
  934.58,
  920.79,
  923.61,
  921.88,
  1096.03,
  1041.94,
  951.67,
  932.29,
  935.73,
  941.29,
  944.34,
  965.24,
  928.95,
  943.34,
  968.91,
  977.17,
  941.77,
  964.47,
  964.86,
  926.3,
  929.23,
  934.07,
  974.39,
  977.48,
  953.9,
  929.79,
  948.32,
  943.09,
  933.89,
  948.3,
  934.66,
  936.59,
  958.61,
  930.23,
  927.04,
  966.15,
  923.08,
  887.6,
  924.59,
  909.7,
  889.48,
  892.51,
  906.88,
  907.99,
  927.54,
  902.11,
  902.41,
  940.2,
  937.34,
  952.79,
  952.53,
  944.37,
  952.09,
  924.2,
  924.65,
  939.26,
  967.97,
  988.18,
  1017.07,
  1007.07,
  1014.48,
  1016.72,
  1007.58,
  974.98,
  1053.01,
  1044.22,
  1038.93,
  1029.5,
  1093.14,
  1124.3,
  1120.13,
  1123.74,
  1105.22,
  1132.26,
  1124.54,
  1137.46,
  1177.16,
  1114.36,
  1087.06,
  1096.11,
  1083.61,
  1096.21,
  1069.42,
  1090.59,
  1081.66,
  1095.27,
  1105.93,
  1098.18,
  1102.24,
  1115.35,
  1127.81,
  1139.65,
  1159.92,
  1180.29,
  1157.27,
  1201.08,
  1186.57,
  1200.8,
  1244.75,
  1216.21,
  1199.9,
  1224.75,
  1188.85,
  1180.26,
  1151.1,
  1173.41,
  1156.91,
  1160.99,
  1160.67,
  1158.08,
  1129.06,
  1100.04,
  1068.78,
  1102.13,
  1079.86,
  1029.01,
  1032.81,
  995.74,
  979.22,
  924.57,
  901.16,
  868.52,
  964.42,
  902.96,
  899.91,
  902.52,
  926.63,
  899.92,
  911.75,
  879.48,
  857.78,
  862.7,
  868.01,
  868.61,
  867.72,
  831.92,
  841.49,
  828.46,
  918.32,
  902.51,
  900.41,
  873.43,
  885.39,
  897.63,
  892.44,
  879.04,
  850.83,
  848.52,
  918.32,
  902.51,
  900.41,
  873.43,
  885.39,
  897.63,
  892.44,
  879.04,
  850.83,
  848.52,
  844.87,
  834.54,
  832.48,
  815.48,
  811.23,
  821.2,
  805.1,
  794.49,
  801.23,
  788.8,
  769.7,
  789.8,
  763.46,
  758.57,
  773.49,
  764.45,
  739.66,
  757.55,
  731.12,
  724.06,
  732.7,
  723.8,
  714.91,
  723.46,
  705.1,
  708.9,
  723.75,
  703.06,
  684.51,
  692.63,
  683.14
];
//把new Date出来的时间格式转换为data123中的日期格式
function riqigeshi(now) {
  return (
    now.toLocaleDateString() +
    " " +
    now.getHours() +
    now.toLocaleTimeString().substr(-6, 6)
  );
}

//用来返回data123一样的数据格式
function chartData(i, data, now) {
  return {
    value: [riqigeshi(now), data[i] / 1024]
  };
}

//把原数据改成data123一样的格式
function changeData(datain) {
  var liuru = [];
  for (var i = 0; i < 289; i++) {
    startTime = new Date(+startTime + fiveMinutes);
    liuru.push(chartData(i, datain, startTime));
  }
  return liuru;
}
var liuru = changeData(data_in);
export default {
  name: "phase",
  components: { Place, Heads },
  data() {
    return {};
  },
  methods: {
    handleEcharts() {
      let myChart = this.$echarts.init(document.getElementById("main"));
      //这个是第二种引用方法，必须先进行声明
      let option = {
        title: {
          text: "动态数据 + 时间坐标轴"
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
            data: liuru
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      setInterval(() => {
        // liuru先shift(),再push()
        var liuruShift = liuru.shift();
        var liuruShiftVal = liuruShift.value[1];
        var newlrtime = riqigeshi(
          new Date(+new Date(liuruShift.value[0]) + oneDay + fiveMinutes)
        );
        liuru.push({ value: [newlrtime, liuruShiftVal] });
        myChart.setOption({
          series: {
            data: liuru
          }
        });
      }, 3000);

      window.onresize = function() {
        myChart.resize();
      };
    },
    mounted() {
      this.handleEcharts();
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
      }
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