import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import {sync} from 'vuex-router-sync'
import Vuelidate from "vuelidate";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Element from 'element-ui'

import ApiService from './services/api.service'
import TokenService from './services/storage.service'
import VueMeta from 'vue-meta'


import elementLangEn from 'element-ui/lib/locale/lang/en';
import elementLocale from 'element-ui/lib/locale';

elementLocale.use(elementLangEn);

Vue.config.productionTip = false;
Vue.use(Vuelidate);

Vue.use(Element);

Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
});


// Set the base URL of the API
ApiService.init(`http://192.168.1.8:8080`);

// If token exists set header
if (TokenService.getToken()) {
    ApiService.setHeader()
}

//Sync vue-router's current $route as part of vuex store's state.
sync(store, router);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
