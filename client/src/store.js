import Vue from 'vue';
import Vuex from 'vuex';
import createVuexAlong from 'vuex-along';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: '',
    userInfo: {
      userUUID: '',
      userAccountName: '',
      authority: {},
    },
    userInstance: {
      authority: {},
      generalInformation: {},
      experiences: [],
      publications: [],
      customizations: [],
    },
  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload.token;
    },
    setUserInfo: (state, payload) => {
      state.userInfo = payload.userInfo;
    },
    setUserInstance: (state, payload) => {
      state.userInstance = payload.userInstance;
    },
  },
  actions: {
    commitSetTokenMutation: ({ commit }, payload) => {
      commit('setToken', payload);
    },
    commitSetUserInfoMutation: ({ commit }, payload) => {
      commit('setUserInfo', payload);
    },
    commitSetUserInstance: ({ commit }, payload) => {
      commit('setUserInstance', payload);
    },
  },
  plugins: [createVuexAlong({
    name: 'hive-vuex-saver',
    local: {
      list: ['token', 'userInfo', 'userInstance'],
    },
  })]
});

export default store;