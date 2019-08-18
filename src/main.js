import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Buefy from 'buefy'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
//import { *  add more icons here */} from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookSquare, faGoogle)
Vue.component('vue-fontawesome', FontAwesomeIcon)
Vue.use(Vuex)
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
