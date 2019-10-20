import Vue from 'vue'
import Router from 'vue-router'

import TokenService from './services/storage.service'

import BalanceSheet from './components/balance-sheet/balance-sheet'
import TrialBalance from './components/trial-balance/trial-balance'
import journalsList from './components/journals/journals-list'
import addJournal from './components/journals/add-journal'
import generalLedger from './components/general-ledger/general-ledger'
import AccountsList from './components/accounts/list';
import addAccount from './components/accounts/add-account'
import login from './components/login/login'
import register from './components/login/register'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {   
            name: 'login',
            path: '/login', 
            component: login,
            meta: {
                public: true,  // Allow access to guest user.
                onlyWhenLoggedOut: true
            } 
        },
        {   
            name: 'register',
            path: '/register', 
            component: register,
            meta: {
                public: true,  // Allow access to guest user.
                onlyWhenLoggedOut: true
            } 
        },
        {
            path: '/',
            name: 'home',
            component: BalanceSheet,
            meta: {
                public: false,  // Allow access to only loggedin user.
              }
        },
        {
            path: '/accounts/add',
            name: 'add-accounts',
            component: addAccount
        },
        {
            path: '/accounts',
            name: 'accounts',
            component: AccountsList
        },
        {
            path: '/balance-sheet',
            name: '/balance-sheet',
            component: BalanceSheet
        },
        {
            path: '/trial-balance',
            name: '/trial-balance',
            component: TrialBalance
        },

        {
            path: '/journals',
            name: '/journals',
            component: journalsList
        },
        {
            path: '/journals/add',
            name: '/addJournal',
            component: addJournal
        },
        {
            path: '/general-ledger',
            name: '/generalLedger',
            component: generalLedger
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
});

router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some(record => record.meta.public)
    const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
    const loggedIn = !!TokenService.getToken();
  
    if (!isPublic && !loggedIn) {
      return next({
        path:'/login',
        query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
      });
    }
  
    // Do not allow user to visit login page or register page if they are logged in
    if (loggedIn && onlyWhenLoggedOut) {
      return next('/home')
    }
  
    next();
  }) 

  export default router;
