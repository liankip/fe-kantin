<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <section class="section">
    <div class="container my-fluid-container" id="app">
      <RouterView/>
    </div>
  </section>
</template>

<style scoped>
.container.my-fluid-container {
  max-width: none !important;
  width: 100%;
}

@media screen and (min-width: 1024px) {
  .container.my-fluid-container {
    padding-left: 32px;
    padding-right: 32px;
  }
}
</style>
