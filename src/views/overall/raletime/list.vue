<template>
  <basic-container>
    <heads />
    <el-main>
      <div class="box1">
        <div class="left">
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
          <el-button
            style="background-color: #409EFF;color: #fff;margin-left: 30px"
            icon="el-icon-search"
          >立即查询</el-button>
        </div>
      </div>
      <div class="box2">
        <el-table :data="tableData" height="425" border style="width: 100%">
          <el-table-column align="center" type="index" width="50" label="序号"></el-table-column>
          <el-table-column align="center" prop="name" label="时间"></el-table-column>
          <el-table-column align="center" prop="address" label="转速"></el-table-column>
          <el-table-column align="center" prop="address" label="功率"></el-table-column>
          <el-table-column align="center" prop="address" label="机组负荷"></el-table-column>
          <el-table-column align="center" prop="address" label="主蒸汽压力"></el-table-column>
          <el-table-column align="center" prop="address" label="主蒸汽温度"></el-table-column>
        </el-table>
      </div>
    </el-main>
    <place />
  </basic-container>
</template>

<script>
import Heads from "../../heads";
import Place from "../../place";

export default {
  components: {
    Heads,
    Place
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          tag: "公司"
        }
      ]
    };
  }
};
</script>

<style scoped>
.el-main {
  background-color: #fff;
  color: #333;
  height: 70vh;
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
  /* justify-content: flex-start; */
  justify-content: space-between;
  margin: 10px 10px 0 10px;
  padding: 0;
}
.aside {
  line-height: 117px;
  margin-left: 20px;
}
.el-select {
  margin-top: 40px;
}
.el-scrollbar__wrap {
  overflow: hidden;
}
</style>