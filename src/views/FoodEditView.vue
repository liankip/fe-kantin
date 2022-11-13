<template>
  <section class="section">
    <div class="container">
      <form @submit.prevent="foodAdd" @keyup.enter="submit">
        <div class="field">
          <label class="label">Nama</label>
          <div class="control">
            <input class="input is-success" type="text" placeholder="Nama" v-model="food.nama">
          </div>
        </div>
        <div class="field">
          <label class="label">Foto</label>
          <div class="control">
            <input class="input is-success" type="text" placeholder="Foto" v-model="food.foto">
          </div>
        </div>
        <div class="field">
          <label class="label">Harga</label>
          <div class="control">
            <input class="input is-success" type="text" placeholder="Harga" v-model="food.harga">
          </div>
        </div>
        <div class="field">
          <label class="label">Promo</label>
          <div class="control">
            <input class="input is-success" type="text" placeholder="Promo" v-model="food.promo">
          </div>
        </div>
        <div class="field">
          <label class="label">Deskripsi</label>
          <div class="control">
            <textarea class="textarea is-success" type="text" placeholder="Deskripsi"
                      v-model="food.deskripsi"></textarea>
          </div>
        </div>
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
      food: {}
    }
  },
  methods: {
    foodAdd() {
      axios.put(`http://localhost:3000/foods/${this.$route.params.id}`, this.food).then(Res => {
        if (Res.data['data'] !== null) {
          this.$router.push({name: 'dashboard'})
        }
      }).catch(Err => {
        console.log(Err.response.data)
      })
    }
  },
  mounted() {
    axios.get(`http://localhost:3000/foods/${this.$route.params.id}`).then(Res => {
      this.food = Res.data['data']
    }).catch(Err => {
      console.log(Err.message)
    })
  }
}
</script>