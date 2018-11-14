import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '',
    school: null,
    schoolName: '',
    class: null,
    className: '',
  },
  mutations: {
    setTitle(state, newTitle) {
      // eslint-disable-next-line
      state.title = newTitle;
    },
    setSchool(state, school) {
      // eslint-disable-next-line
      state.school = school.id;
      // eslint-disable-next-line
      state.schoolName = school.name;
    },
    setClass(state, newClass) {
      // eslint-disable-next-line
      state.class = newClass.id;
      // eslint-disable-next-line
      state.className = newClass.name
    },
  },
  plugins: [createPersistedState()],
});
