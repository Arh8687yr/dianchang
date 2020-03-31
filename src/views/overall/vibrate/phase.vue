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
// 获取当前时间的时间戳
var oldDate = Date.parse(new Date())
var newDate = Date.parse(new Date()) + 600 *1000
function randomData() {
  now = new Date(+now+oneDay);
  // 数据
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    // value: [
    //   [now.getHours(), now.getMinutes(), now.getSeconds()].join("/"),
    //   Math.round(value)
    // ]
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value)
    ]
  };
}

var data = [];
var now = +new Date(2020, 3, 31);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
  data.push(randomData());
}

export default {
  name: "fadp",
  components: { Place, Heads },
  data() {
    return {};
  },
  created(){
    console.log(data)
  },
  methods:{
    handleEcharts(){
      let myChart = this.$echarts.init(document.getElementById("main"));
    //这个是第二种引用方法，必须先进行声明
    let option = {
      title: {
        text: "一倍频幅值"
      },
      tooltip: {
        trigger: "axis",
        // 数据提示框容器
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
        // x轴的字
      //  axisLabel: {
      //    show: true,
      //    showMinLabel: true,
      //    showMaxLabel: true,
      //    formatter: function (value) {
      //      // 格式化成时分秒
      //      let date = new Date(value);
      //      let nowHours = date.getHours().toString();
      //      let nowMin = date.getMinutes().toString();
      //      let nowSeconds = date.getSeconds().toString();
      //      var texts = [nowHours,nowMin,nowSeconds];
      //      return texts.join(':');
      //    }
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
          // name: "模拟数据",
          type: "line",
          showSymbol: false,
          hoverAnimation: false,
          data: data
        }
      ]
      }
    
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 读秒更新图表
    this.timer = setInterval(function() {
      // for (var i = 0; i < 5; i++) {
      //   data.shift();
      //   data.push(randomData());
      // }
      //在这个方法中定义的图表变量必须把这个方法放到可以检查出来的地方
      myChart.setOption({
        series: [
          {
            data: data
          }
        ],
        xAxis: [{
          // min: startTime,
          // max: endTime
        }]
        //在执行方法的时候重新给它一个值
      });
    }, 1000);
    }
  },
  mounted() {
     this.handleEcharts()
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