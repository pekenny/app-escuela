<script setup>

import Header from './components/Header.vue'
import LoginView from './views/LoginView.vue'

import { useUserStore } from './stores/user';
import { RouterView } from 'vue-router'

const userStore = useUserStore();

</script>

<template>
  <LoginView v-if="!userStore.login"></LoginView>

  <div v-else>
    <Header></Header>

    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>
