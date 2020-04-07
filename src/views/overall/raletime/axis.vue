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
      <div ref="location" style="width: 99%;height:360px;padding-top: 10px"></div>
    </el-main>
    <Place />
  </basic-container>
</template>

<script>
import Heads from "../../heads";
import Place from "../../place";
export default {
  name: "axis",
  data() {
    return {
      radio4: "1",
      id: "1",
      item: [],
      name: "",
      time: "",
      rotate: "",
      option: {
        title: {
          text: "极坐标图",
          textStyle: {
            fontSize: 20,
          },
          itemGap: 5,
          left: "center",
          align: "right",
          // 副标题
          subtext: "x:0 y:0",
          // 副标题样式
          subtextStyle: {
            fontSize: 14,
            color: "rgb(59, 53, 146)",
            fontWeight: 700,
            verticalAlign: "middle"
          }
        },
        // legend: {
        //   // 图例样式
        //   icon: "line",
        //   selectedMode: false,
        //   textStyle: {
        //     color: "rgb(125, 121, 187)",
        //     fontSize: 16
        //   },
        //   data: ["1#X"]
        // },
        polar: {},
        angleAxis: {
          min: 0,
          max: 360,
          interval: 90,
          clockwise: true
        },
        radiusAxis: {
          min: 0,
          max: 150,
          interval: 30,
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          }
        },
        series: []
      },
      options: [
        {
          value: "选项1",
          label: "通道对1"
        },
        {
          value: "选项2",
          label: "通道对2"
        },
        {
          value: "选项3",
          label: "通道对3"
        },
        {
          value: "选项4",
          label: "通道对4"
        },
        {
          value: "选项5",
          label: "通道对5"
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
  created() {},
  mounted() {
    let myChart = this.$echarts.init(this.$refs.location);
    myChart.setOption(this.option);
  },
  components: { Place, Heads }
};
</script>

<style scoped>
.el-main {
  background-color: #fff;
  color: #333;
  height: 71vh;
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