<template>
  <form action>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">{{action}}</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Email">
          <b-input type="email" :value="email" placeholder="Your email" required></b-input>
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            :value="password"
            password-reveal
            placeholder="Your password"
            required
          ></b-input>
        </b-field>

        <b-field label="Confirm password" v-if="type == 'signup'">
          <b-input
            type="password"
            :value="passwordConfirm"
            password-reveal
            placeholder="Your password"
            required
          ></b-input>
        </b-field>

        <b-checkbox>Remember me</b-checkbox>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Close</button>
        <button class="button is-primary" @click="login" id="action-button">{{action}}</button>
      </footer>
    </div>
  </form>
</template>

<script>
import Cloud from '../cloud.js'

export default {
  props: ['type'],
  methods: {
    login: async function () {
      try {
        document.getElementById('action-button').classList.add('is-loading')
        this.type == 'signUp'? 
          await Cloud.signUp() : await Cloud.logIn()
      }
      catch (error){
        this.$snackbar.open('Unknown ' + this.action + ' error.')
      }
      document.getElementById('action-button').classList.remove('is-loading')
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
