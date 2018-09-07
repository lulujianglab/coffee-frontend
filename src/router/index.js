import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Homepage from '@/components/Homepage'
import Dashboard from '@/components/coffee/Dashboard'
import CoffeeList from '@/components/coffee/CoffeeList'
// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
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
      component: Home,
      name: '用户管理',
      menuShow: true,
      // leaf: true, // 只有一个节点
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [
        {path: '/coffee/dashboard', component: Dashboard, name: '咖啡列表', menuShow: true},
        {path: '/coffee/list', component: CoffeeList, name: '咖啡分类', menuShow: true},
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