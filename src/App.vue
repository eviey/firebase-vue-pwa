<template>
  <div>
    <Navbar/>
    <div class="app-body content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cloud from './cloud.js'

export default {
  components: { 
    Navbar,
  },
  mounted: async function () {
    let component = this.$loading.open()
    await Cloud.init()
    component.close()
  }
}
</script>

<style scoped>
  .app-body {
    margin: 2rem auto;
    max-width: 66rem;
    padding: 0 2rem 0 2rem;
  }
</style>

