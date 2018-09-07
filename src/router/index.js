import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Homepage from '@/components/Homepage'
import Hot from '@/components/coffee/Hot'
import Sell from '@/components/coffee/Sell'
import Person from '@/components/coffee/Person'
import Area from '@/components/coffee/Area'
import Autogeneration from '@/components/introduce/Autogeneration'
import Selectgeneration from '@/components/introduce/Selectgeneration'
import Dashboard from '@/components/Dashboard'
// import Register from '@/components//Register'

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)
const Register = resolve => require(['@/components//Register'], resolve)

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/homepage',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {path: '/homepage', component: Homepage, name: '首页', menuShow: true}
      ]
    },
    {
      path: '/',
      name: '用户推荐',
      component: Home,
      menuShow: true,
      iconCls: 'iconfont icon-books', // 图标样式class
      children: [
        {path: '/introduce/autogeneration', component: Autogeneration, name: '自主推荐', menuShow: true},
        {path: '/introduce/selectgeneration', component: Selectgeneration, name: '选择推荐', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '咖啡管理',
      menuShow: true,
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [
        {path: '/coffee/hot', component: Hot, name: '咖啡热度', menuShow: true},
        {path: '/coffee/sell', component: Sell, name: '咖啡销量', menuShow: true},
        {path: '/coffee/person', component: Person, name: '咖啡用户', menuShow: true},
        {path: '/coffee/area', component: Area, name: '咖啡地域', menuShow: true},

      ]
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/homepage',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-setting1', // 图标样式class
      children: [
        {path: '/dashboard', component: Dashboard, name: '咖啡总览', menuShow: true}
      ]
    },
    // {
    //   path: '/',
    //   component: Home,
    //   name: '图书管理',
    //   menuShow: true,
    //   iconCls: 'iconfont icon-books',
    //   children: [
    //     {path: '/book/list', component: BookList, name: '图书列表', menuShow: true},
    //     {path: '/book/category', component: BookCategoryList, name: '图书分类', menuShow: true}
    //   ]
    // },
    // {
    //   path: '/',
    //   component: Home,
    //   name: '设置',
    //   menuShow: true,
    //   iconCls: 'iconfont icon-setting1',
    //   children: [
    //     {path: '/user/profile', component: UserProfile, name: '个人信息', menuShow: true},
    //     {path: '/user/changepwd', component: UserChangePwd, name: '修改密码', menuShow: true}
    //   ]
    // }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    console.log(11)
    window.localStorage.removeItem('access-user')
    next()
  } else {
    // let user = JSON.parse(window.localStorage.getItem('access-user'))
    let user = window.localStorage.getItem('access-user')
    if (!user) {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

export default router