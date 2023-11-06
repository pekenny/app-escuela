<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <Header></Header>
  
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
