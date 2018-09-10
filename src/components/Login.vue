<template>
  <div class="wrapper">
  <div class="login-layout">
    <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
            class="demo-ruleForm login-container">
      <!-- <h3 class="title">会员登录</h3> -->
      <el-form-item prop="username">
        <el-input type="text" v-model="account.username" auto-complete="off" placeholder="用户名" style="opacity:0.7;"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码" style="opacity:0.7;"></el-input>
      </el-form-item>
      <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;background:#fff;color:#b26767;font-size:20px;font-family:'Kaiti SC';font-weight:900;" @click.native.prevent="handleLogin" :loading="loading">登录</el-button>
      </el-form-item>
      <a class="small" @click="handleRegister">立即注册</a>
    </el-form>
  </div>
  </div>
</template>

<script>
  import API from '../api/api_user.js';
  export default {
    data() {
      return {
        loading: false,
        account: {
          username: 'admin',
          pwd: '123456'
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
        let that = this;
        this.$refs.AccountFrom.validate((valid) => {
          if (valid) {
            this.loading = true;
            let loginParams = {username: this.account.username, pwd: this.account.pwd};
            
//             API.login(loginParams).then(function (result) {
//               that.loading = false;
//               if (result && result.id) {
//                 localStorage.setItem('access-user', JSON.stringify(result));
// //                that.$store.commit('SET_ROUTERS', user.permissions)
// //                that.$router.addRoutes(that.$store.getters.addRouters);
// //                that.$router.options.routes = that.$store.getters.routers;
//                 that.$router.push({path: '/'});
//               } else {
//                 that.$message.error({showClose: true, message: result.errmsg || '登录失败', duration: 2000});
//               }
//             }, function (err) {
//               that.loading = false;
//               that.$message.error({showClose: true, message: err.toString(), duration: 2000});
//             }).catch(function (error) {
//               that.loading = false;
//               console.log(error);
//               that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
//             });
                localStorage.setItem('access-user', 'zhangshan');
                that.$router.push({path: '/'});
          }
        });
      },
      handleRegister() {
        this.$router.push({path: '/register'});
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100%;
    background: url('../assets/img-login/denglu.png') repeat;
    background-size: 100% auto;  
    display: flex;
  }
  .login-layout {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 5px solid #fff;
    margin: 40px;
   
  }
  .login-container {
   
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 0 100px;
    width: 400px;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
    .small {
      display: block;
      color: #fff;
      margin-top: 15px;
    }
  }
</style>