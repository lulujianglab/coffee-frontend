<template>
  <div class="wrapper">
    <div class="wrapper-left">
      <div class="menu-title">
        <a href="#">
          <img src="static/logo.png"  @click.prevent="collapse">
          <h1 v-show="!collapsed">咖啡智能推荐系统</h1>
        </a>
      </div>
      <div class="menu">
        <!--左侧导航-->
        <aside :class="{showSidebar:!collapsed}">
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
      </div>
    </div>
    <div class="wrapper-right">
      <div class="container-header">
        <!--展开折叠开关-->
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="iconfont icon-menufold" v-show="!collapsed"></i>
          <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
        </div>
        <div class="topbar-account topbar-btn">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-user"></i><img :src="this.sysUserAvatar"/>{{nickname}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </div>
      <div class="content">
        <!-- <div class="grid-content bg-purple-light"> -->
          <div class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
      </div>
    </div>
  </div>
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
  .wrapper {
    display: flex;
    background-color: #f0f2f5;
    // height: 100vh;
    height: 100%;

    .wrapper-left {
      max-width: 256px;
      min-width: 64px;
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
      background: #001529;
      // min-height: 100vh;
      height: 100%;
      position: relative;
      z-index: 10;
      transition: all .2s;

      .menu-title {
        background: #002140;
        min-width: 64px;
        height: 64px;
        line-height: 64px;
        overflow: hidden;
        position: relative;
        transition: all .3s;

        img {
          display: inline-block;
          height: 32px;
          vertical-align: middle;
        }

        h1 {
          color: #fff;
          display: inline-block;
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 0 12px;
          vertical-align: middle;
        }
      }

      .menu {
        aside {
          min-width: 64x;
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
            color: rgba(255, 255, 255, 0.65) !important;
            background-color: #333744;
            border-right: none;
          }
          .el-submenu .el-menu-item {
            min-width: 64px;
            text-align: left;
          }
          .el-menu {
            width: 250px;
            text-align: left;
          }
          .el-menu--collapse {
            width: 64px;
          }
          .el-menu .el-menu-item, .el-submenu .el-submenu__title {
            height: 46px;
            line-height: 46px;
          }
          .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
            // background-color: #7ed2df;
            // background-color: #F4A460
            // color: #F4A460;
            color: #fff;
          }
        }
      }

    }

    .wrapper-right {
      height: 100%;
      overflow-x: hidden;
      background: #f0f2f5;
      display: flex;
      flex: 1;
      flex-direction: column;

      .container-header {
        width: 100%;
        height: 64px;
        line-height: 64px;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        padding: 0 12px 0 0;
        position: relative;

        .menu-toggle{
          float: left;
          text-align: left;
          width: 200px;
          padding-left: 10px;
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

      .content {
        position: relative;
        height: 100%;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
        flex: 1;
        margin: 24px 24px;
        // overflow: auto;
        overflow: hidden;
        transition: .3s;

        .grid-content {
          // min-height: 650px;
          
        }
        .content-wrapper {
          height: 100%;
        }
        .content-bottom {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
          padding-bottom: 20px;

          .anticon {
            display: inline-block;
            line-height: 1;
            text-align: center;
            text-rendering: optimizeLegibility;
            vertical-align: -.125em;
          } 
        }
      }      
    }
  }
</style>