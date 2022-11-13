<template>
  <div>
    <form @submit.prevent="userLogin" @keyup.enter="submit">
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Username" v-model="form.username">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Pasword</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="password" placeholder="Password" v-model="form.password">
          <span class="icon is-small is-left">
          <i class="fas fa-key"></i>
        </span>
        </div>
      </div>
      <div class="buttons">
        <button class="button is-success is-fullwidth" type="submit">Masuk</button>
      </div>
      <p class="subtitle has-text-centered">atau</p>
      <div class="buttons">
        <button @click="$router.push('/register')" class="button is-success is-fullwidth" type="submit">Daftar</button>
      </div>
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
    userLogin() {
      axios.post('http://localhost:3000/users/login', this.form).then(Res => {
        if (Res.data['data'] !== null) {
          this.$router.push({name: 'dashboard'})
          localStorage.setItem('user', JSON.stringify(Res.data['data']));
        }
      }).catch(Err => {
        console.log(Err.response.data)
      })
    }
  }
}
</script>