import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    appReady: false
  },
  mutations: {
    changeAuthState: function(state, authObject) {
      state.user = authObject
    },
    setAppReady: function(state) {
      state.appReady = true
    }
  }
})
