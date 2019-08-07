<template>
  <div class="buttons">
    <div v-if="isLoading">
      <!-- Display nothing until app is fully loaded -->
    </div>
    <div v-else-if="!isLoggedIn">
      <b-button type="is-outlined is-primary is-inverted" @click="dialogLogIn">Log in</b-button>
      <b-button type="is-primary is-inverted" @click="dialogSignUp">Sign up</b-button>
    </div>
    <div v-else>
      <b-button type="is-primary is-outlined" @click="signOut">Sign out</b-button>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue'
import Cloud from '../cloud.js'
import Status from '../statusCodes'

export default {
  computed:{
    isLoggedIn: function () {
      return this.$store.state.user
    },
    isLoading: function () {
      return this.$store.state.user == Status.Auth.Loading
    }
  },
  methods: {
    dialogLogIn: function () {
      this.dialog('login')
    },
    dialogSignUp: function () {
      this.dialog('signup')
    },
    signOut: async function () {
      let component = this.$loading.open()
      let result = await Cloud.logOut()
      
      if (result == Status.Auth.Success) 
        this.$snackbar.open('Signed out') 
      else  
        this.$snackbar.open('Error while signing out')
      
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

