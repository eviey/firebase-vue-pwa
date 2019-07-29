<template>
  <section class="hero is-primary has-navbar-fixed-top is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <Navbar/>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered my-content">
        <h1 class="title height-fix">Deploy in record time!</h1>
        <h2 class="subtitle">You are already in your new app and <strong>Firebase Authorization</strong> is already integrated into it. Create an account or sign in to keep exploring!</h2>
        <div class="container field is-grouped custom-field">
          <p class="control is-expanded">
            <input type="text" placeholder="Enter your email" class="input">
          </p>
          <p class="control">
            <a class="button is-primary is-inverted">
              <strong >Comenzar</strong>
            </a>
          </p>
        </div>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
          <ul>
            <li class="is-active">
              <a>Overview</a>
            </li>
            <li>
              <a>Modifiers</a>
            </li>
            <li>
              <a>Grid</a>
            </li>
            <li>
              <a>Elements</a>
            </li>
            <li>
              <a>Components</a>
            </li>
            <li>
              <a>Layout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar },
  mounted: function () {
    document.getElementById('app').classList.remove('has-navbar-fixed-top')
  }
}
</script>

<style scoped>
  .my-content {
    max-width: 52em;
  }
  .custom-field {
    max-width: 32em;
  }
  .height-fix {
    padding-top: 1.4em;
  }
</style>
