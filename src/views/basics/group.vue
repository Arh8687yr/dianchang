<template>
  <el-container>
  <el-aside width="200px">
  <avue-tree :option="treeOption" :data="treeData" @node-click="nodeClick"></avue-tree>
  </el-aside>
  <el-main>
    <avue-crud
      :data="data"
      :option="option"
      v-model="obj"
    ></avue-crud>
  </el-main>
</el-container>
</template>

<script>
  export default {
    data() {
      return {
        obj: {},
        treeData:[
            {
              id:0,
              label:'一级部门',
              value:0,
              children:[
                {
                  id:1,
                  label:'一级部门1',
                  value:0,
                }
              ]
            }],
          treeOption:{
            nodeKey:'id',
            addBtn:false,
            menu:false,
            size:'small',
            formOption:{
              labelWidth:100,
              column:[{
                  label:'自定义项',
                  prop:'test'
              }],
            },
            props:{
              labelText:'标题',
              label:'label',
              value:'value',
              children:'children'
            }
          },
        data:[],
        data0: [
          {
            name: '张三',
            sex: '男'
          },
          {
            name: '李四',
            sex: '女'
          }
        ],
        data1: [
          {
            name: '张三1',
            sex: '男'
          },
          {
            name: '李四2',
            sex: '女'
          }
        ],
        option: {
          column: [
            {
              label: '姓名',
              prop: 'name'
            },
            {
              label: '性别',
              prop: 'sex'
            }
          ]
        }
      }
    },
    created(){
       this.data=this.data0;
    },
    methods: {
      nodeClick(data){
        if(data.id==0){
          this.data=this.data0;
        }else  if(data.id==1){
          this.data=this.data1;
        }
      }
    }
  }
</script>
<style >

</style>