<script setup>
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    // validar que exista data en localStorage
    if(!localStorage.getItem('data')){
        router.push('/login');
    }
</script>
<template>
  <div class="welcome-container">
        <h1>¡Bienvenido!</h1>
        <p>¡Gracias por visitar nuestro sitio web!</p>
    </div>
</template>


<style scoped>
     .welcome-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }
</style>