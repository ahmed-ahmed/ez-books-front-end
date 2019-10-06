import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import AccountsList from './components/accounts/list'
import BalanceSheet from './components/balance-sheet/balance-sheet'
import TrialBalance from './components/trial-balance/trial-balance'
import journalsList from './components/journals/journals-list'
import addJournal from './components/journals/add-journal'
import generalLedger from './components/general-ledger/general-ledger'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: BalanceSheet
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
})
