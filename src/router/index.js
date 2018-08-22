/* loongli 2018年8月10日10:00:41 */

import Vue from 'vue'
import Router from 'vue-router'

import header from '@/components/header'
import index from '@/main/index'
import regist from '@/main/regist'
import Login from '@/main/Login'
import home from '@/main/home'
import classify from '@/main/classify'
import Cart from '@/main/Cart'
import my from '@/main/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//初始页
      name: 'index',
      meta:{index:-1},//meta对象的index用来定义当前路由的层级,由小到大,由低到高（做路由动画切换）
      component: index
    },
    {
      path: '/Login',//登陆
      name: 'Login',
      meta:{index:0},
      component: Login
    },
    {
      path: '/regist',//注册
      name: 'regist',
      meta:{index:1},
      component: regist
    },
    {
      path: '/header',//头部组件
      name: 'header',
      meta:{index:0},
      component: header
    },
    {
      path: '/home',//主页组件
      name: 'home',
      meta:{index:2},//登录后 进入主页面初始权值为2
      component: home
    },
    {
      path: '/classify',//分类组件
      name: 'classify',
      meta:{index:3},//登录后 进入主页面初始权值为2
      component: classify
    },
    {
      path: '/Cart',//购物车组件
      name: 'Cart',
      meta:{index:4},//登录后 进入主页面初始权值为2
      component: Cart
    },
    {
      path: '/my',//我的组件
      name: 'my',
      meta:{index:5},//登录后 进入主页面初始权值为2
      component: my
    },
  ]
})
