<template>
  <div class="buttons">
    <b-button type="is-outlined is-primary" @click="dialogLogIn">Log in</b-button>
    <b-button type="is-primary" @click="dialogSignUp">Sign up</b-button>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue'

export default {
  methods: {
    dialogLogIn: function () {
      this.dialog('login')
    },
    dialogSignUp: function () {
      this.dialog('signup')
    },
    dialog: function(type) {
      this.$modal.open({
        parent: this,
        component: LoginForm,
        hasModalCard: true,
        props: {type: type}
      });
    }
  }
};
</script>

