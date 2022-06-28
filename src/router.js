import Vue from 'vue'
import Router from 'vue-router'
// import store from '../core/store'
import healthCenterIndex from '@/pages/index/index'
import healthCenterTest from '@/pages/test/index'
import healthCenterHealth from '@/pages/health/index'
// import { mapGetters } from 'vuex';


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/healthCenter/index',
    },
    {
      path: '/healthCenter/index',
      name: 'HealthCenterIndex',
      component: healthCenterIndex
    },
    {
      path: '/healthCenter/test',
      name: 'HealthCenterTest',
      component: healthCenterTest
    },
    {
      path: '/healthCenter/health',
      name: 'HealthCenterHealth',
      component: healthCenterHealth
    }
  ],
})

// 权限
// const whiteList = ['login', 'register'];
// router.beforeEach((to, from, next) => {
//   if (whiteList.indexOf(to.name) > -1 || store.getters.getToken) {
//     next(undefined);
//   } else {
//     next({
//       path: '/auth',
//     })
//   }
// })


export default router;
