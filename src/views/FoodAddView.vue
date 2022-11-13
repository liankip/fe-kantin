<template>
  <section class="section">
    <div class="container">
      <form @submit.prevent="foodAdd" @keyup.enter="submit">
        <div class="field">
          <label class="label">Nama</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Nama" v-model="form.nama">
            <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Foto</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Foto" v-model="form.foto">
            <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Harga</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Harga" v-model="form.harga">
            <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Promo</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Promo" v-model="form.promo">
            <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Deskripsi</label>
          <div class="control has-icons-left has-icons-right">
            <textarea class="textarea is-success" type="text" placeholder="Deskripsi"
                      v-model="form.deskripsi"></textarea>
          </div>
        </div>
        <input type="hidden" v-model="form.userid">
        <div class="buttons">
          <button class="button is-success is-fullwidth" type="submit">Simpan</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        userid: '',
        foto: '',
        nama: '',
        harga: '',
        promo: '',
        deskripsi: ''
      },
    }
  },
  methods: {
    foodAdd() {
      const user = JSON.parse(localStorage.getItem('user'))
      this.form.userid = user.id

      axios.post('http://localhost:3000/foods/', this.form).then(Res => {
        if (Res.data['data'] !== null) {
          this.$router.push({name: 'dashboard'})
        }
      }).catch(Err => {
        console.log(Err.response.data)
      })
    }
  },
}
</script>