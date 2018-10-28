import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faAngleLeft, faAngleDoubleUp, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueTouch from 'vue-touch';

import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.use(VueTouch);

library.add(faCog, faAngleLeft, faAngleDoubleUp, faSadCry);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
