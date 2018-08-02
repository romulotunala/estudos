import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstAppFirebase from '@/components/FirstAppFirebase'
import Cpxbook from '@/components/Cpxbook'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstAppFirebase',
      component: FirstAppFirebase
    },
    {
      path: '/cpxbook',
      name: 'Cpxbook',
      component: Cpxbook
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
