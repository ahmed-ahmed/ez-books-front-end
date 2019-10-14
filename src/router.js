import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import AccountsList from './components/accounts/list'
import BalanceSheet from './components/balance-sheet/balance-sheet'
import TrialBalance from './components/trial-balance/trial-balance'
import journalsList from './components/journals/journals-list'
import addJournal from './components/journals/add-journal'
import generalLedger from './components/general-ledger/general-ledger'
import AccountsList from './components/accounts/list';
import addAccount from './components/accounts/add-account';
import Login from './components/login'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/login', component: Login },
        {
            path: '/',
            name: 'home',
            component: BalanceSheet
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
//     .beforeEach((to, from, next) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['/login'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
//
//     if (authRequired && !loggedIn) {
//         return next('/login');
//     }
//
//     next();
// });
