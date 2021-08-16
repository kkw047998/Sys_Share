import Vue from 'vue'
import App from './App.vue'
window.axios = require('axios');
import store from './store'
import VueRouter from 'vue-router';
import { routes } from './router/routes';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import { index } from './components/index';
import Vuetify,{ VCalendar } from 'vuetify';
import VueSimpleAlert from 'vue-simple-alert';
import VueSignaturePad from 'vue-signature-pad';
import FullCalendar from 'vue-full-calendar';
import 'fullcalendar/dist/fullcalendar.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import { Auth0Plugin } from "./auth";
import { domain, clientId } from "../auth_config.json";

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
Vue.use(VueSignaturePad);
Vue.use(VueResource);
Vue.use(VueSimpleAlert);
Vue.use(VeeValidate);
Vue.use(FullCalendar)
Vue.use(Vuetify,{ VCalendar });
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});
var protocol = location.protocol;
var host = window.location.hostname;
var src = protocol+'//'+host+'/systems/UI/src';
console.log(src);
//axios.defaults.baseURL = 'https://47.240.35.174//systems/UI/src';
//axios.defaults.baseURL = 'https://portal.mscollege.edu.hk/systems/UI/src';
axios.defaults.baseURL = src;
//axios.defaults.baseURL = 'https://192.168.64.2/systems/UI/src';
//axios.defaults.baseURL = "https://school-partner-php-win.azurewebsites.net/systems/UI/src";
//axios.defaults.baseURL = "https://school-partner-php.azurewebsites.net/systems/UI/src";
//axios.defaults.baseURL = 'https://s-g301-d009.munsang.edu.hk/portal_vue/UI/src';
//axios.defaults.baseURL = 'https://request.msc.edu.hk/src';
//axios.defaults.baseURL = 'https://s-web-s033.munsang.edu.hk/src';
// Router
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'hash'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App }
})