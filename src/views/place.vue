<template>
  <el-container>
    <el-footer>
      <div style="margin-left: 40px;display:flex;justify-content: space-around">
        <div>机组: #4组</div>
        <div>实时数据时间: {{date | formatDateTime}}</div>
        <div>实时转速: {{rotate}}RPM</div>
        <div>状态: {{item}}</div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import { heads, footers } from "../api/overall/monitoring";
// import { heads } from "../api/overall/monitoring";

export default {
  data() {
    return {
      radio4: "1",
      id: "1",
      item: "",
      name: "",
      time: "",
      rotate: "",
      date: new Date()
    };
  },
  filters: {
    formatDateTime(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },
  mounted() {
    let _this = this
    this.timer = setInterval(() => {
      _this.date = new Date(); //修改数据date
      _this.createData(_this.id)
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
    }
  },
  created() {
    console.log(1)
  },
  methods: {
    //   获取数据时间
    createData(id){
      footers(id).then(res => {
      // this.time = res.data.data.ticktime
      this.rotate = res.data.data.zsval
      })
      heads(id).then(res => {
        this.item = res.data.data.devicestatus
        this.name = res.data.data.descc
      })
    }
    
  }
};
</script>


<style>
.el-footer {
  line-height: 50px;
  font-weight: bold;
}
.select {
  margin: 20px 40px 0 20px;
  color: #000;
  text-indent: 2px;
}
.el-header i {
  font-size: 20px;
  color: #fff;
}
.el-main i {
  font-size: 15px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.el-footer {
  background-color: rgb(235, 250, 254);
}
</style>