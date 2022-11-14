<template>
  <div class="columns is-multiline">
    <div v-for="review in reviews" :key="review.id" class=" column is-full">
      <article class="media notification has-background-light">
        <div class="media-content">
          <div class="content">
            <h1 class="title is-size-4 has-text-black">
              {{ review.review }}
            </h1>
            <p class="subtitle is-size-6 has-text-black">Rating : {{ review.rating }}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      reviews: [],
      user: {}
    }
  },
  methods: {
    getReviews() {
      axios.get(`http://localhost:3000/reviews`).then(Res => {
        this.reviews = Res.data['data']
      }).catch(Err => {
        console.log(Err.message)
      })
    },
  },
  mounted() {
    this.getReviews()

    const user = localStorage.getItem('user');

    if (user === null) {
      this.$router.push({name: 'login'})
    }
  }
}
</script>