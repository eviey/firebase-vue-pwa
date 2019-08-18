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

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8f7bff;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;



// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>


