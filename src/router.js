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
      meta: { title: 'Preferencje' },
    },
    {
      path: '/select-school',
      name: 'pick-school',
      component: () => import('@/views/PickSchool.vue'),
      meta: { title: 'Wybierz szkołę' },
    },
    {
      path: '/select-class/:school',
      name: 'pick-class',
      component: () => import('@/views/PickClass.vue'),
      meta: { title: 'Wybierz klasę' },
    },
    {
      path: '/schelude/:school/:class',
      name: 'schelude',
      component: () => import('@/views/Schelude.vue'),
      meta: { title: 'Plan' },
    },

    // Debug
    {
      path: '/loading',
      name: 'loading',
      component: () => import('@/components/Loading.vue'),
      meta: { title: 'Loading test' },
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@/components/Error.vue'),
      meta: { title: 'Error test' },
    },
  ],
});
