import Vue from 'vue'
import Router from 'vue-router'
import Service from '@/components/Service'
import About from '@/components/About'
import MainPage from '@/components/MainPage'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import MainArea from '@/components/PersonalArea/MainArea'
import Payment from '@/components/PersonalArea/Payment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Service',
      name: 'Service',
      component: Service
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/mainArea',
      name: 'mainArea',
      component: MainArea
    },
    {
      path: '/Registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment
    }
  ]
})
