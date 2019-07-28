import Vue from 'vue'
import Vuex from 'vuex'
import Status from './statusCodes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: Status.Auth.Loading
  },
  mutations: {
    changeAuthState: function(state, authObject) {
      state.user = authObject
    }
  }
})
