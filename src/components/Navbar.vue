<template>
<div class="navbar shadow is-fixed-top">
  <nav class="navbar is-fixed-top do-narrow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link to="/">
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
      <div class="navbar-start">
        <router-link v-for="(item,i) in menu" :key="i" class="navbar-item" :to="item.route">{{item.label}}</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <LoginButtons />
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import LoginButtons from "./LoginButtons.vue";

export default {
  components: { LoginButtons },
  data: function() {
    return {
      title: "Firebase-vue-pwa",
      menu : [
        {label: 'start', route: '/'},
        {label: 'about', route: '/about'}
      ]
    };
  },
  methods: {
    toggleMenu: function (){
      document.getElementById('navbar-menu').classList.toggle('is-active')
      document.getElementById('navbar-burger').classList.toggle('is-active')
    }
  }
};
</script>

<style scoped>

.shadow {
  box-shadow: 0px 0px 12px -6px rgb(20, 20, 20);
}

.do-narrow {
  margin: 0 auto;
  max-width: 80rem;
}


</style>


