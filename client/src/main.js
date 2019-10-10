import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './locales/index';
import Chart from 'chart.js';
import { axios } from './axios';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$Chart = Chart;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
