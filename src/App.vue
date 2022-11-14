<script>

export default {
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
  }
}
</script>

<template>
  <section class="section is-hidden-mobile">
    <div class="container" id="app">
      <nav v-if="user !== null" class="navbar has-shadow is-white">
        <div class="navbar-brand">
          <a class="navbar-burger" id="burger">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div v-if="user.roles === 1" class="navbar-menu" id="nav-links">
          <div class="navbar-end">
            <a class="navbar-item" href="/food-add">Tambah Menu</a>
            <a class="navbar-item">Hasil Transaksi</a>
            <a class="navbar-item" href="/reviews">Hasil Review</a>
          </div>
        </div>
        <div v-else class="navbar-menu" id="nav-links">
          <div class="navbar-end">
            <a class="navbar-item">Hasil Transaksi</a>
            <a class="navbar-item">Checkout</a>
          </div>
        </div>
      </nav>
      <RouterView/>
    </div>
  </section>
</template>

<style scoped>
</style>
