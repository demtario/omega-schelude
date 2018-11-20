import Vue from 'vue';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faAngleLeft, faAngleDoubleUp, faSadCry, faCalendarAlt, faExclamationCircle, faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Wrapper to hammer.js
import VueTouch from 'vue-touch';

// Axios stuff
import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

// Local items
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// eslint-disable-next-line
library.add(faCog, faAngleLeft, faAngleDoubleUp, faSadCry, faCalendarAlt, faExclamationCircle, faStar, faMapMarkerAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueTouch);

// Global axios
const localMode = false;
const apiURL = localMode ? 'http://localhost:3000/' : 'https://api.plan.heseya.com/';

Vue.prototype.$api = axios.create({
  baseURL: apiURL,
  headers: { 'Cache-Control': 'no-cache' },
  // cache will be enabled by default
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
