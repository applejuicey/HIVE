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
  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload.token;
    },
    setUserInfo: (state, payload) => {
      state.userInfo = payload.userInfo;
    },
  },
  actions: {
    commitSetTokenMutation: ({ commit }, payload) => {
      commit('setToken', payload);
    },
    commitSetUserInfoMutation: ({ commit }, payload) => {
      commit('setUserInfo', payload);
    },
  },
  plugins: [createVuexAlong({
    name: 'hive-vuex-saver',
    local: {
      list: ['token', 'userInfo'],
    },
  })]
});

export default store;