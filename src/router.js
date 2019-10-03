import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import AccountsList from './components/accounts/list'
// import BalanceSheet from './components/balance-sheet/balance-sheet'
import TrialBalance from './components/trial-balance/trial-balance'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: TrialBalance
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
