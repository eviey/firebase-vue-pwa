<template>
  <div class="shadow">
    <nav class="navbar do-narrow" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <h1 class="title">{{title}}</h1>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start"></div>
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
      title: "Firebase-vue-pwa"
    };
  }
};
</script>

<style scoped>

.shadow {
  box-shadow: 0px 2px 5px 3px #ccc;
}

.do-narrow {
  margin: 0 auto;
  max-width: 80rem;
}

</style>


