<template>
  <div>
    <form @submit.prevent="userRegister" @keyup.enter="submit">
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
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="email" placeholder="Email" v-model="form.email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
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
      <div class="field">
        <label class="label">Nomor Telephone</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Nomor Telephone" v-model="form.nomor_telephone" maxlength="12">
          <span class="icon is-small is-left">
            <i class="fas fa-phone"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <label class="checkbox">
            <input type="checkbox" v-model="form.roles" :true-value="1" :false-value="2">
            Centang jika sebagai petugas kantin
          </label>
        </div>
      </div>
      <div class="buttons">
        <button class="button is-success is-fullwidth" type="submit">Daftar</button>
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
        email: '',
        password: '',
        nomor_telephone: '',
        roles: 2
      }
    }
  },
  methods: {
    userRegister() {
      console.log(this.form)
      axios.post('http://localhost:3000/users/register', this.form).then(Res => {
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