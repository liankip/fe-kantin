<template>
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered is-multiline">
        <div class="column is-6-tablet is-3-desktop">
          <h1 class="is-size-1 title">{{ food.nama }}</h1>
          <p>{{ food.deskripsi }}</p>
        </div>
        <div class="column is-5 has-text-centered">
          <img :src="food.foto" alt="" class="px-6">
        </div>
        <div class="column is-4">
          <div class="is-size-4 mb-4">{{ currency(food.harga) }} <span class="tag is-danger">{{ food.promo }}%</span></div>
          <p class="mb-4">{{ food.deskripsi }}</p>
          <p class="subtitle">Rating: {{ food.rating }}</p>
          <button class="button is-primary" onclick="return false;">
            Pesan
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      food: {}
    }
  },
  methods: {
    getFood() {
      const user = JSON.parse(localStorage.getItem('user'));

      axios.get(`http://localhost:3000/foods/${this.$route.params.id}`).then(Res => {
        this.food = Res.data['data'][0]
      }).catch(Err => {
        console.log(Err.message)
      })
    },
    currency(value) {
      return new Intl.NumberFormat("id-ID",
          {style: "currency", currency: "IDR"}).format(value);
    }
  },
  mounted() {
    this.getFood()

    const user = localStorage.getItem('user');

    if (user === null) {
      this.$router.push({name: 'login'})
    }
  }
}
</script>