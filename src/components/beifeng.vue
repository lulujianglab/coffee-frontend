<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">
      <div class="topbar-logo topbar-btn">
        <a href="#"><img src="../assets/logo.png" style="padding-left:8px;"  @click.prevent="collapse">
          
        </a>
      </div>
      <div class="topbar-logos" v-show="!collapsed">
        <!-- <a href="/"><img src="../assets/logotxt.png"></a> -->
        <span style="font-size: 18px;color: #fff; line-height:26px;">中国联通</span>
      </div>
      <div class="topbar-title" @click.prevent="collapse">
        <span style="font-size: 18px;color: #FF7F24; line-height:26px; font-size: 20px; font-weight: 600;">咖啡智能推荐系统</span>
        <!-- <i class="iconfont icon-menufold" v-show="!collapsed"></i>
        <i class="iconfont icon-menuunfold" v-show="collapsed"></i> -->
      </div>
      <div class="topbar-account topbar-btn">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-user"></i><img :src="this.sysUserAvatar"/>{{nickname}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>

    <!--中间-->
    <el-col :span="24" class="main">
      <!--左侧导航-->
      <aside :class="{showSidebar:!collapsed}">
        <!--展开折叠开关-->
        <!-- <div class="menu-toggle" @click.prevent="collapse">
          <i class="iconfont icon-menufold" v-show="!collapsed"></i>
          <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
        </div> -->
        <!--导航菜单-->
        <el-menu :default-active="defaultActiveIndex" router :collapse="collapsed" @select="handleSelect">
          <template v-for="(item,index) in $router.options.routes" v-if="item.menuShow">
            <el-submenu v-if="!item.leaf" :index="index+''" :key="index">
              <template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
              <el-menu-item v-for="term in item.children" :key="term.path" :index="term.path" v-if="term.menuShow"
                            :class="$route.path==term.path?'is-active':''">
                <i :class="term.iconCls"></i><span slot="title">{{term.name}}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else-if="item.leaf&&item.children&&item.children.length" :index="item.children[0].path"
                          :class="$route.path==item.children[0].path?'is-active':''" :key="index">
              <i :class="item.iconCls"></i><span slot="title">{{item.children[0].name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </aside>

      <!--右侧内容区-->
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>

  </el-row>
</template>

<script>
  import {bus} from '../bus.js'
  import API from '../api/api_user';
  import avatar from '../assets/avatar.gif';
  export default {
    name: 'home',
    created(){
      bus.$on('setNickName', (text) => {
        this.nickname = text;
      })
      bus.$on('goto', (url) => {
        if (url === "/login") {
          localStorage.removeItem('access-user');
        }
        this.$router.push(url);
      })
    },
    data () {
      return {
        defaultActiveIndex: "0",
        nickname: '',
        collapsed: false,
        sysUserAvatar: avatar
      }
    },
    methods: {
      handleSelect(index){
        this.defaultActiveIndex = index;
      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      },
      jumpTo(url){
        this.defaultActiveIndex = url;
        this.$router.push(url); //用go刷新
      },
      logout(){
        let that = this;
        this.$confirm('确认退出吗?', '提示', {
          confirmButtonClass: 'el-button--warning'
        }).then(() => {
          //确认
          that.loading = true;
        //   API.logout().then(function (result) {
        //     that.loading = false;
        //     localStorage.removeItem('access-user');
        //     that.$router.go('/login'); //用go刷新
        //   }, function (err) {
        //     that.loading = false;
        //     that.$message.error({showClose: true, message: err.toString(), duration: 2000});
        //   }).catch(function (error) {
        //     that.loading = false;
        //     console.log(error);
        //     that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
        //   });
        localStorage.removeItem('access-user');
        that.$router.go('/login'); //用go刷新
        }).catch(() => {});
      }
    },
    mounted() {
      let user = localStorage.getItem('access-user');
      if (user) {
        // user = JSON.parse(user);
        // this.nickname = user.nickname || '';
        this.nickname = user|| ''
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .topbar-wrap {
      height: 60px;
      line-height: 60px;
      // background: #373d41;
      background-color: #fff;
      padding: 0px;
      .topbar-btn {
        color: #777;
      }
      .topbar-logo {
        float: left;
        width: 59px;
        line-height: 30px;
        background-color: #002140;
      }
      .topbar-logos { 
        float: left;
        width: 190px;
        background-color: #002140;
        height: 100%;      
        
      }
      .topbar-logo img, .topbar-logos img {
        height: 40px;
        margin-top: 10px;
        margin-left: -5px;
      }
      .topbar-title {
        float: left;
        text-align: left;
        width: 200px;
        padding-left: 10px;
        border-left: 1px solid rgba(0, 0, 0, 0.65);
        color: rgba(0, 0, 0, 0.65);
      }
      .topbar-account {
        float: right;
        padding-right: 10px;
      }
      .userinfo-inner {
        cursor: pointer;
        color: rgba(0, 0, 0, 0.65);
        padding-left: 10px;
        img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin: 10px 0px 10px 10px;
            float: right;
        }
      }
      .icon-user {
          padding-right: 5px;
      }
    }
    .main {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
    }
    aside {
      min-width: 50px;
      background: #333744;
      &::-webkit-scrollbar {
        display: none;
      }
      &.showSidebar {
        overflow-x: hidden;
        overflow-y: auto;
      }
      .el-menu {
        height: 100%; /*写给不支持calc()的浏览器*/
        height: -moz-calc(100% - 80px);
        height: -webkit-calc(100% - 80px);
        height: calc(100% - 80px);
        border-radius: 0px;
        background-color: #333744;
        border-right: 0px;
      }
      .el-submenu .el-menu-item {
        min-width: 60px;
        text-align: left;
      }
      .el-menu {
        width: 250px;
        text-align: left;
      }
      .el-menu--collapse {
        width: 60px;
      }
      .el-menu .el-menu-item, .el-submenu .el-submenu__title {
        height: 46px;
        line-height: 46px;
      }
      .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
        // background-color: #7ed2df;
        background-color: #F4A460
      }
    }
    .menu-toggle {
      background: #4A5064;
      text-align: center;
      color: white;
      height: 26px;
      line-height: 30px;
    }
    .content-container {
      background: #f0f2f5;
      flex: 1;
      overflow-y: auto;
      padding: 10px;
      padding-bottom: 1px;
      .content-wrapper {
        background-color: #f0f2f5;
        box-sizing: border-box;
      }
    }
  }
</style>