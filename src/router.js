import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: { title: '' },
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: () => import('@/views/Preferences.vue'),
      meta: { title: 'Preferences' },
    },
    {
      path: '/select-class',
      name: 'pick-class',
      component: () => import('@/views/PickClass.vue'),
      meta: { title: 'Select your Class' },
    },
    {
      path: '/schelude/:class',
      name: 'schelude',
      component: () => import('@/views/Schelude.vue'),
      meta: { title: 'Schelude' },
    },
  ],
});
