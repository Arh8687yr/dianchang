<template>
    <basic-container>
        <Heads />
        <el-main></el-main>
        <Place />
    </basic-container>
</template>

<script>
import Heads from '../../heads'
import Place from '../../place'
    export default{
        components:{Place,Heads} 
    }
</script>

<style  scoped>
    .el-main {
        background-color: #fff;
        color: #333;
        height: 75vh;
        font-weight: bold;
    }
</style>