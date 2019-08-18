<template>
  <nav class="navbar do-narrow is-fixed-top is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link to="/app">
          <h1 class="title">{{title}}</h1>
        </router-link>
      </div>
      <a role="button" class="navbar-burger burger" id="navbar-burger" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navbar-menu">
      <div v-if="userIsLoggedIn" class="navbar-start">
        <router-link v-for="(item,i) in menu" :key="i" :to="item.route" class="navbar-item">
          <a class="has-text-dark">{{item.label}}</a>
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <LoginButtons />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LoginButtons from "./LoginButtons.vue";
import Status from '../statusCodes'

export default {
  components: { LoginButtons },
  data: function() {
    return {
      title: "Firebase-vue-pwa",
      menu : [
        {label: 'start', route: '/app'},
        {label: 'about', route: '/app/about'}
      ]
    };
  },
  computed: {
    userIsLoggedIn: function () {
      let usr = this.$store.state.user 
      return usr != Status.Auth.Loading && usr != null
    }
  },
  methods: {
    toggleMenu: function (){
      document.getElementById('navbar-menu').classList.toggle('is-active')
      document.getElementById('navbar-burger').classList.toggle('is-active')
    }
  },
  mounted: function () {
    document.addEventListener('click', (event) => {
      let targetElement = event.target;
      if (targetElement != document.getElementById('navbar-burger')){
        document.getElementById('navbar-menu').classList.remove('is-active')
        document.getElementById('navbar-burger').classList.remove('is-active')
      } 
    })
  }
};
</script>

<style scoped>

.do-narrow {
  margin: 0 auto;
  max-width: 86rem;
}


</style>


