import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Login from '../components/Login/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
