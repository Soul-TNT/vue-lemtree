// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  { ToastPlugin, LoadingPlugin,Loading } from 'vux'
import http from '@/assets/js/axios.js';//axios数据交互
import api from '@/assets/js/api';
import 'vue-ydui/dist/ydui.base.css';
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(Loading)
Vue.prototype.http = http;
Vue.prototype.api = api;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

