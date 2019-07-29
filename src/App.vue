<template>
  <body id="app">
    <div v-if="user==1"></div>
    <App v-else-if="user"/>
    <Landing v-else/>
  </body>
</template>

<script>
import App from './components/App.vue'
import Landing from './views/Landing.vue'
import Cloud from './cloud.js'

export default {
  components: {
    App,
    Landing
  },
  computed: {
    user: function () {
      return this.$store.state.user
    }
  },
  mounted: async function () {
    let component = this.$loading.open()
    await Cloud.init()
    component.close()
  }
}
</script>


