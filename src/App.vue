<script setup>
import { ref } from 'vue';

import Header from './components/Header.vue'
import LoginView from './views/LoginView.vue'

import { RouterView } from 'vue-router'

const login = ref(true)

</script>

<template>
  <LoginView v-if="!login"></LoginView>

  <div v-else>
    <Header></Header>

    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>
