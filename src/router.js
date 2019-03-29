// router.js
import Vue from 'vue'
import Router from 'vue-router'
import debtors from './components/debtors/Debtors.vue'
import manager from './components/manager/Manager'
import main from './components/main/Main.vue'

Vue.use(Router)


export default new Router({
    routes: [
      {
        path: '/debtors',
        name: 'debtors',
        component: debtors
      },
      {
        path: '/manager',
        name: 'manager',
        component: manager
      },
      {
        path: '/',
        name: 'main',
        component: main
      },
      {
        path: '*',
        redirect: '/'
      },
    ],
    mode: 'history'
})