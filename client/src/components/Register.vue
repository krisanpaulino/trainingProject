<template>
<div>
  <h1>Register</h1>
  <input type="email" name="email" placeholder="email" v-model="email"/>
  <br>
  <input type="password" name="password" placeholder="password" v-model="password"/>
  <br>
  <button v-on:click="register">Register</button>
</div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {

  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register: function () {
      AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
<style scoped>
</style>
