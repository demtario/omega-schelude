import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faAngleLeft, faAngleDoubleUp, faSadCry, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueTouch from 'vue-touch';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(VueTouch);

library.add(faCog, faAngleLeft, faAngleDoubleUp, faSadCry, faCalendarAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
