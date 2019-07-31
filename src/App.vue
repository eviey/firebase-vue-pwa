<template>
  <body id="app">
    <b-loading  v-if="!appReady"/>
    <App        v-else-if="user"/>
    <Landing    v-else/>
  </body>
</template>

<script>
import App from './components/App.vue'
import Landing from './views/Landing.vue'
import Cloud from './cloud.js'

var loading

export default {
  components: {
    App,
    Landing
  },
  computed: {
    user: function () {
      return this.$store.state.user
    },
    appReady: function () {
      return this.$store.state.appReady
    }
  },
  watch: {
    appReady: function (){
      loading.close()
    }
  },
  mounted: async function () {
    loading = this.$loading.open()
    setTimeout( () => loading.close(), 5000)
    await Cloud.init()
  }
}
</script>


