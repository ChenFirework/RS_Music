import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Login from '../components/Login/Login.vue'
import Register from '../components/Register/Register.vue'
import Navigation from '../components/Navigation/Navigation.vue'
import Ranking from '../components/Ranking/Ranking.vue'
import Home from '../components/Home/Home.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    }
  ]
})
