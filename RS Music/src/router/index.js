import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Login from '../components/Login/Login.vue'
import Register from '../components/Register/Register.vue'
import Navigation from '../components/Navigation/Navigation.vue'
import Ranking from '../components/Ranking/Ranking.vue'
import Rank from '../components/Rank/Rank.vue'
import Home from '../components/Home/Home.vue'
import Footer from '../components/Footer/Footer.vue'
import Carousel from '../components/Carousel/Carousel.vue'
import Songsheet from  '../components/Songsheet/Songsheet.vue'
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
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/songsheet',
      name: 'songsheet',
      component: Songsheet
    }
    
  ]
})
