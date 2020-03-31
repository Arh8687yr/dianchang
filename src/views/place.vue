<template>
  <el-container>
    <el-footer>
      <div style="margin-left: 40px;display:flex;justify-content: space-around">
        <div>机组: #4组</div>
        <div>实时数据时间: {{date | formatDateTime}}</div>
        <div>实时转速: {{rotate}}</div>
        <div>状态: {{item}}</div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
// import { heads, footers } from "../api/overall/monitoring";
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
    var that = this;
    this.timer = setInterval(() => {
      that.date = new Date(); //修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
    }
  },
  created() {
    //   获取数据时间
    // footers(this.id).then(res=>{
    //     this.time= res.data.data.ticktime;
    //     this.rotate = res.data.data.zsval
    // }),
    // heads(this.id).then(res => {
    //   this.item = res.data.data.devicestatus;
    //   this.name = res.data.data.descc;
    //   console.log(res.data.data.devicestatus);
    // });
  },
  // methods: {
  //   getNowTime() {
  //     var myDate = new Date();
  //     var year = myDate.getFullYear();
  //     var mon = myDate.getMonth() + 1;
  //     var date = myDate.getDate();
  //     var h = myDate.getHours(); //获取当前小时数(0-23)
  //     var m = myDate.getMinutes(); //获取当前分钟数(0-59)
  //     var s = myDate.getSeconds(); //获取当前秒
  //     this.time =
  //       year + "-" + mon + "-" + date + "" + " " + h + ":" + m + ":" + s;
  //   }
  // }
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