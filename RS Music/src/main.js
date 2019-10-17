// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入element-ui 组件
import {Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button);
//引入axios模块
import axios from "axios"
//6.配置服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/"
//7.配置保存session信息
axios.defaults.withCredentials=true
//8.axios 注册vue
Vue.prototype.axios=axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
