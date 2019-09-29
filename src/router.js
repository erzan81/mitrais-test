import Vue from 'vue'
import Router from 'vue-router'
import Registation from './views/Registration.vue'
import Login from './views/Login.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'registration',
      component: Registation
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
