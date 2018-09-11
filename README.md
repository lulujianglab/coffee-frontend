# vue-frontend

> 一个基于vuejs2.0和element-ui搭建的用户咖啡推荐系统

## 相关技术

* vuejs2.0：一套构建用户界面的渐进式JavaScript框架，易用、灵活、高效

* element-ui：一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库

* vue-router：前端路由，用Vue.js + vue-router 创建单页应用(SPA)非常简单

* axios: 基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 node.js 中使用
　　
## 项目结构

```
├── build  #webpack编译相关文件目录，一般不用动 
├── config  #配置目录
│   ├────dev.env.js  #开发环境变量
│   ├────index.js    #主配置文件
│   └────prod.env.js #生产环境变量
├── dist  #生产环境下build后的文件存放目录（发布目录）
├── server  #服务端代码目录，提供给前端接口
├── src #前端项目源码目录
│   ├───—api  #封装的接口文件目录
│   ├───—assets  #资源目录
│   ├───—common  #公用文件目录
│   ├───—components  #组件及页面文件目录
│   ├───—router  #路由目录
│   ├───—App.vue #项目入口文件
│   ├───—bus.js  #公共通信组件
│   └────main.js  #项目的核心文件
├── static  #开发模式下的静态资源目录
├── index.html #首页入口文件，你可以添加一些 meta 信息或同统计代码啥的
├── package.json #项目配置文件
└── README.md #项目的说明文档，markdown 格式
```

## 项目编译和运行


## Build Setup

``` bash

### 安装依赖

> npm install

### 依赖安装成功后执行启动命令

> npm run dev

#### 显示如下内容说明本地启动成功
  
#### Your application is running here: http://localhost:8080

## 正式环境编译命令

> npm run build

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
