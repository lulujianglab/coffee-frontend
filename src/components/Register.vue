<template>
  <div class="container">
    <div v-if="condition">
      <div class="mask">
      <div class="actionsheet">
        <p>恭喜注册成功</p>
        <a href="/login">确定</a>        
      </div>
    </div>
    </div>
    <h5 class="small" @click="handleLogin">已有账号，马上登陆</h5>
    <div class="register-layout">
    <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <!-- <h3 class="title">会员登录</h3> -->
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" auto-complete="off" placeholder="用户名" style="opacity:0.7;"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码" style="opacity:0.7;"></el-input>
    </el-form-item>
   <el-form-item prop="age">
      <el-input type="text" v-model="account.age" auto-complete="off" placeholder="年龄" style="opacity:0.7;"></el-input>
    </el-form-item>

    <el-select v-model="account.valueSex" placeholder="性别">
        <el-option
            v-for="item in account.optionSex"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select>
    
    <el-select v-model="account.valueCity" placeholder="城市">
        <el-option
            v-for="item in account.optionCity"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select>

    <el-select v-model="account.valueInterest" placeholder="喜好">
        <el-option
            v-for="item in account.optionInterest"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select>
    <el-checkbox v-model="checked" checked class="remember">温馨提示：代表您已同意<a href="#">《用户服务协议》</a>、<a href="#">《隐私政策》</a></el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;background:#fff;color:#b26767;font-size:20px;font-family:'Kaiti SC';font-weight:900;" @click.native.prevent="handleCheck" :loading="loading">立即注册</el-button>
    </el-form-item>
    <!-- <p class="small" @click.native.prevent="handleLogin">立即注册</p> -->
  </el-form>
  </div>
  </div>
  
</template>

<script>
  import API from '../api/api_user.js';
  export default {
    data() {
      return {
        condition: false,
        loading: false,
        register: '',
        account: {
          username: 'admin',
          pwd: '123456',
          age: '18',
          optionSex: [{
            value: '女',
            label: '女'
          },{
            value: '男',
            label: '男'
          }],
          optionCity: [{
              value: '北京',
              label: '北京',
          },{
              value: '上海',
              label: '上海',
          },{
              value: '深圳',
              label: '深圳',
          },{
              value: '长沙',
              label: '长沙',
          }],
          optionInterest: [{
              value: '黑咖啡',
              label: '黑咖啡',
          },{
              value: '白咖啡',
              label: '白咖啡',
          },{
              value: '美式拿铁',
              label: '美式拿铁',
          },{
              value: '抹茶拿铁',
              label: '抹茶拿铁',
          }],
          valueSex:'',
          valueCity:'',
          valueInterest:''
        },
        
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            //{ validator: validaePass }
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleLogin() {  
        this.$router.push({path: '/login'});
      },
      handleCheck() {
        this.condition = true
      }
    }
  }
</script>
<style>
  html {
    height: 100%;
  }
  body {
    /* background: #DFE9FB; */
    height: 100%;
    width: 100%;
  }
</style>
<style lang="scss" scoped>
    .container {
      height: 100%;
      width: 100%;
      overflow: hidden;
      background: url('../assets/img-register/background.jpg') repeat;
      background-size: 100%;

      .mask {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;

        .actionsheet {
          margin-top: 30px;
          width: 500px;
          height: 600px;
          
          background: url('../assets/img-register/image.png') no-repeat;
          background-size: 100% auto;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-weight: 900;
          font-size: 40px;
          font-family:'Kaiti SC';
          padding-top: 20px;
        } 
        
      }
    }
    .register-layout {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    width: 400px;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
    
  }
  .small {
      color: #fff;
      margin-top: 85px;
      margin-right: 110px;
      text-align: right;
      font-size: 20px;
      font-weight: 900;
      font-family:'Kaiti SC';
      cursor: pointer;
    }
</style>