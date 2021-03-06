<template>
  <form auto="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Authenticate</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Email">
          <b-input 
          type="email" 
          v-model="email" 
          placeholder="Your email" 
          required></b-input>
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            v-model="password"
            placeholder="Your password"
            required
          ></b-input>
        </b-field>

        <b-field label="Confirm password" v-if="dialogType == 'sign-up'">
          <b-input
            type="password"
            v-model="passwordConfirm"
            placeholder="Your password"
            required
          ></b-input>
        </b-field>

        <b-checkbox>Remember me</b-checkbox>

        <b-field
          v-if="hasFacebook || hasGoogle" 
          label="Or" 
          style="padding-top:1em;">
        </b-field>
        <b-field>
          <b-button
            v-if="hasGoogle"
            @click="authenticate('google', 'google-button')"
            id="google-button"
            label="Log In with Google"
            icon-left="google"
            icon-pack="fab"
            type="button is-danger is-fullwidth">
          </b-button>
        </b-field>
        <b-field>
          <b-button
            v-if="hasFacebook"
            @click="authenticate('facebook', 'facebook-button')"
            id="facebook-button"
            label="Log In with Facebook"
            icon-left="facebook-square"
            icon-pack="fab"
            type="button is-info is-fullwidth">
          </b-button>
        </b-field>

      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="$parent.close()">Close</button>
        <b-button 
          v-if="dialogType=='sign-up'"
          label="Sign Up"
          type ="button is-primary" 
          @click="authenticate('sign-up', 'action-button')" 
          id="action-button">
        </b-button>
        <b-button 
          v-else
          label="Log In"
          type ="button is-primary" 
          @click="authenticate('log-in', 'action-button')" 
          id="action-button">
        </b-button>
      </footer>
    </div>
  </form>
</template>

<script>
import Cloud from '../cloud.js'
import Status from '../statusCodes.js'

export default {
  props: ['dialogType','hasFacebook', 'hasGoogle'],
  methods: {
    authenticate: async function (authType, buttonId){
      let result
      document.getElementById(buttonId).classList.add('is-loading')        
      if (authType == 'google') result = await Cloud.googleLogIn()
      else if (authType == 'facebook') result = await Cloud.facebookLogIn()
      else if (authType == 'log-in') result = await Cloud.logIn(this.email, this.password)
      else if (authType == 'sign-up') result = await Cloud.signUp(this.email, this.password)
      document.getElementById(buttonId).classList.remove('is-loading')        
      this.handleAuthResponse(result)
    },
    handleAuthResponse: function (result){
      if (result == Status.Auth.Success) {
        this.$router.push('/app')
        this.$snackbar.open('Successfully signed in')
        this.$parent.close()
      }
      else if (result == Status.Auth.UserNotFound) 
        this.$snackbar.open('User not found!')
      else if (result == Status.Auth.UserAlreadyExists) 
        this.$snackbar.open('User already exists!')
      else if (result == Status.Auth.OperationNotAllowed)
        this.$snackbar.open('This sign-in method is not enabled for this Firebase Project!')
      else if (result == Status.Auth.InvalidPassword)
        this.$snackbar.open(`Invalid password!`)
      else if (result == Status.Auth.WeakPassword)
        this.$snackbar.open(`Please chose a stronger password!`)
      else 
        this.$snackbar.open('Unknown authentication error.')
    }
  },
  data: function () {
    return {
      password: '',
      passwordConfirm: '',
      email: ''
    }
  }
}
</script>
