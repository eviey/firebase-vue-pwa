<template>
  <div>
    <Navbar/>
    <div class="app-body">
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
    text-align: center;
  }
</style>

