import Vue from 'vue'
import Router from 'vue-router'
import Global from '../components/Global'
import Home from '../components/Home'
import News from '../components/News'
import Sources from '../components/Sources'
import Login from '../components/Login'
import Register from '../components/Register'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/global',
      name: '/Global',
      component: Global
    },
    {
      path: '/News',
      name: '/News',
      component: News
    },
    {
      path: '/sources',
      name: '/sources',
      component: Sources
    },
    {
      path: '/login',
      name: '/login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
