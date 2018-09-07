<template>
  <el-row class="warp">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    </el-row>
</template>

<script>
import API from '../api/api_user.js';
  export default {
    mounted() {
      console.log(22)
      let loginParams = {username:"zhanshan"}
      API.test(loginParams).then(function (result) {
        console.log('result',result)
      })
    }
  }
   
</script>

<style>
</style>