import Vue from 'vue'
import Router from 'vue-router'

import { authenticationService } from '@/_services';
import { Role } from '@/_helpers';

import BalanceSheet from './components/balance-sheet/balance-sheet'
import TrialBalance from './components/trial-balance/trial-balance'
import journalsList from './components/journals/journals-list'
import addJournal from './components/journals/add-journal'
import generalLedger from './components/general-ledger/general-ledger'
import AccountsList from './components/accounts/list';
import addAccount from './components/accounts/add-account';
import LoginPage from '@/components/security/LoginPage';


Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { 
            path: '/login', 
            component: LoginPage 
        },
        {
            path: '/',
            name: 'home',
            component: BalanceSheet,
            meta: { authorize: [] } 
        },
        {
            path: '/accounts/add',
            name: 'add-accounts',
            component: addAccount,
            meta: { authorize: [Role.Admin] } 
        },
        {
            path: '/accounts',
            name: 'accounts',
            component: AccountsList,
            meta: { authorize: [] } 
        },
        {
            path: '/balance-sheet',
            name: '/balance-sheet',
            component: BalanceSheet,
            meta: { authorize: [] } 
        },
        {
            path: '/trial-balance',
            name: '/trial-balance',
            component: TrialBalance,
            meta: { authorize: [] } 
        },

        {
            path: '/journals',
            name: '/journals',
            component: journalsList,
            meta: { authorize: [] } 
        },
        {
            path: '/journals/add',
            name: '/addJournal',
            component: addJournal,
            meta: { authorize: [] } 
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
    // redirect to login page if not logged in and trying to access a restricted page
    const { authorize } = to.meta;
    const currentUser = authenticationService.currentUserValue;

    if (authorize) {
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return next({ path: '/login', query: { returnUrl: to.path } });
        }

        // check if route is restricted by role
        if (authorize.length && !authorize.includes(currentUser.role)) {
            // role not authorised so redirect to home page
            return next({ path: '/' });
        }
    }

    next();
});

export default router;

