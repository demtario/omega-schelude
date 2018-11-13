import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '',
    school: null,
    class: null
  },
  mutations: {
    setTitle(state, newTitle) {
      // eslint-disable-next-line
      state.title = newTitle;
    },
    setSchool(state, newSchool) {
      // eslint-disable-next-line
      state.school = newSchool;
    },
    setClass(state, newClass) {
      // eslint-disable-next-line
      state.class = newClass;
    },
  },
});
