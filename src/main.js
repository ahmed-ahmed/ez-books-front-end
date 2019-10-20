import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from "vuelidate";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Element from 'element-ui'

import elementLangEn from 'element-ui/lib/locale/lang/en';
import elementLocale from 'element-ui/lib/locale';
elementLocale.use(elementLangEn);


// import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import Notifications from 'vue-notification'
Vue.config.productionTip = false;
Vue.use(Vuelidate);

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

Vue.use(Notifications);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
