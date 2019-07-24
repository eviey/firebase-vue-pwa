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

export default {
  components: { 
    Navbar,
  }  
}
</script>

<style scoped>
  .app-body {
    margin: 2rem auto;
    max-width: 64rem;
  }
</style>

