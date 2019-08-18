<template>
    <div>
        <div class="navbar shadow is-fixed-top is-primary">
            <Navbar/>
        </div>
        <div class="app-body content">
            <router-view></router-view>
        </div> 
    </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
    components: { Navbar },
    mounted: function () {
        document.getElementById('app').classList.add('has-navbar-fixed-top')
    }
}
</script>


<style scoped>
  .app-body {
    margin: 2rem auto;
    max-width: 66rem;
    padding: 0 2rem 0 2rem;
  }
  .shadow {
    box-shadow: 0px 0px 12px -6px rgb(20, 20, 20);
  }
</style>