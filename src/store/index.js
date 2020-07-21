import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null
  },
  mutations: {
    LOGIN: (state, data) => {
      state.token = data.token;
      state.user = data.user;
    },
    LOGOUT: (state) => {
      state.token = null;
      state.user = null;
    }
  },
  actions: {
  },
  modules: {
  }
})
