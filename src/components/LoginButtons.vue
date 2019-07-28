<template>
  <div class="buttons">
    <div v-if="!isLoggedIn">
      <b-button type="is-outlined is-primary" @click="dialogLogIn">Log in</b-button>
      <b-button type="is-primary" @click="dialogSignUp">Sign up</b-button>
    </div>
    <div v-else>
      <a type="is-primary" @click="logOut">Sign out</a>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue'
import Cloud from '../cloud.js'

export default {
  computed:{
    isLoggedIn: function () {
      return this.$store.state.user
    }
  },
  methods: {
    dialogLogIn: function () {
      this.dialog('login')
    },
    dialogSignUp: function () {
      this.dialog('signup')
    },
    logOut: async function () {
      let component = this.$loading.open()
      await Cloud.logOut()
      this.$store.commit('changeAuthState', Cloud.getAuthState())
      this.$store.state
      component.close()
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

