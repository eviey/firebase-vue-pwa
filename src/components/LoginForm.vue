<template>
  <form action>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">{{action}}</p>
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
            password-reveal
            placeholder="Your password"
            required
          ></b-input>
        </b-field>

        <b-field label="Confirm password" v-if="type == 'signup'">
          <b-input
            type="password"
            v-model="passwordConfirm"
            password-reveal
            placeholder="Your password"
            required
          ></b-input>
        </b-field>

        <b-checkbox>Remember me</b-checkbox>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="$parent.close()">Close</button>
        <button class="button is-primary" @click="login" id="action-button">{{action}}</button>
      </footer>
    </div>
  </form>
</template>

<script>
import Cloud from '../cloud.js'
import Status from '../statusCodes.js'

export default {
  props: ['type'],
  methods: {
    login: async function () {
      let result
      try {
        document.getElementById('action-button').classList.add('is-loading')
        if (this.type == 'signUp') {
          result = await Cloud.signUp(this.email, this.password)
        } else {
          result = await Cloud.logIn(this.email, this.password)
        }

        if (result == Status.Auth.Success) this.$snackbar.open('Successfully signed in')
        else if (result == Status.Auth.UserNotFound) this.$snackbar.open('User not found!')
        else this.$snackbar.open('Unknown Error')
        
        document.getElementById('action-button').classList.remove('is-loading')

      }
      catch (error){
        this.$snackbar.open('Unknown ' + this.action + ' error.')
      }
      this.$parent.close()
    }
  },
  computed: {
    action: function (){
      return this.type == 'signup' ? 'Sign up' : 'Log in'
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
