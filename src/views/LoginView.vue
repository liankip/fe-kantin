<template>
  <div>
    <form @submit.prevent="userLogin" @keyup.enter="submit">
      <input type="text" name="email" v-model="form.username">
      <input type="password" name="password" v-model="form.password">
      <button type="submit">Masuk</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    userLogin () {
      axios.post('http://localhost:3000/users/login', this.form).then(Res => {
        // this.$router.push({name: 'dashboard'})
        console.log(Res)
      }).catch(Err => {
        console.log(Err.response.data.error)
      })
    }
  }
}
</script>