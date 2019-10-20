import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import Vuelidate from "vuelidate";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Element from 'element-ui'

import elementLangEn from 'element-ui/lib/locale/lang/en';
import elementLocale from 'element-ui/lib/locale';
elementLocale.use(elementLangEn);


// import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import Notifications from 'vue-notification'

import ApiService from './services/api.service'
import TokenService from './services/storage.service'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(Notifications);
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
  })


// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

Vue.use(Element);

// Vue.use(VuelidateErrorExtractor, {
//     i18n: false,
//     // Define common validation messages.
//     messages: {
//         required: "{attribute} is required!"
//     }
// });
//
// Vue.component("form-group", templates.singleErrorExtractor.foundation6);


//Sync vue-router's current $route as part of vuex store's state.
sync(store, router)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
