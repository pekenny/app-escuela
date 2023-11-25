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
      <router-view class="shadow p-3 mb-5 bg-body rounded"></router-view>
    </main>
  </div>
</template>

<style scoped>
  * {
    font-size: small;
  }
</style>
