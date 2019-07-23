<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
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

