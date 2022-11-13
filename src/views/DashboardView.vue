<template>
  <div class="columns is-multiline is-mobile">
    <div v-for="food in foods" :key="food.id" class="column is-3 is-3-fullhd is-3-desktop is-6-tablet is-12-mobile">
      <div class="card">
        <div class="card-image has-text-centered px-2">
          <img :src="food.foto" alt="">
        </div>
        <div class="card-content">
          <router-link class="title is-size-5" :to="'/food-detail/' + food.id">{{food.nama}}</router-link>
          <br>
          <p class="subtitle">{{ currency(food.harga) }} <span class="tag is-danger">{{ food.promo }}%</span></p>
        </div>
        <footer v-if="user.roles == 1" class="card-footer">
          <p class="card-footer-item">
            <router-link class="has-text-warning is-outlined is-pulled-left is-small" :to="'/food-edit/' + food.id">Ubah</router-link>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      foods: [],
      user: {}
    }
  },
  methods: {
    getFoods() {
      const user = JSON.parse(localStorage.getItem('user'));
      this.user = user

      axios.get(`http://localhost:3000/foods/?userid=${user.id}&roles=${user.roles}`).then(Res => {
        this.foods = Res.data['data']
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
    this.getFoods()

    const user = localStorage.getItem('user');

    if (user === null) {
      this.$router.push({name: 'login'})
    }
  }
}
</script>
