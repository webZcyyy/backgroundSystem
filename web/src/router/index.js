import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeComponent from '@/components/home/homeComponent'
import LoginComponent from '@/components/login/loginComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    }
  ]
})
