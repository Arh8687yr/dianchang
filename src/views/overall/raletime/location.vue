<template>
  <basic-container>
    <Heads />
    <el-main>
      <div class="top">
        <div class="box1">
          <div>
            轴心名称:
            <el-select v-model="axleName" clearable placeholder="通道对1">
              <el-option
                v-for="name in options"
                :key="name.value"
                :label="name.label"
                :value="name.value"
              ></el-option>
            </el-select>
          </div>
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
        </div>
        <div class="box2">
          <el-button
            style="background-color: #409EFF;color: #fff;margin-left: 30px"
            icon="el-icon-search"
          >立即查询</el-button>
        </div>
      </div>
      <div ref="location" style="width: 99%;height:440px;padding-top: 20px"></div>
    </el-main>
    <Place />
  </basic-container>
</template>

<script>
import Heads from "../../heads";
import Place from "../../place";
export default {
  name: "location",
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
          text: "轴心位置图",
          padding:1,
          textStyle:{
            fontSize: 20,
          },
          itemGap: 5,
          left: "center",
          align: "right",
          // 副标题
          subtext:'转速： 0rpm x:0 y:0',
          // 副标题样式
          subtextStyle:{
            fontSize: 14,
            color:'rgb(59, 53, 146)',
            fontWeight:700,
            verticalAlign:'middle'
          }
        },
        polar: {},
        angleAxis: {
          min: 0,
          max: 360,
          interval: 90,
          clockwise: true
        },
        radiusAxis: {
          min: 0,
          max: 200,
          interval: 40,
          splitLine: {
            lineStyle: {
              type:'dashed'
            }
          }
        },
        series: [
        ]
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
.top {
  margin: 20px;
  padding: 0 2rem;
  background-color: rgb(235, 250, 254);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.select {
  margin: 20px 40px 0 20px;
  color: #000;
  text-indent: 2px;
}

.el-main i {
  font-size: 15px;
}

.box1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}
.box1 div {
  /* display: inline-block; */
  margin-left: 1.5rem;
}
.el-select {
  margin: 1rem;
}
.el-scrollbar__wrap {
  overflow: hidden;
}
</style>