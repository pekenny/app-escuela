<script setup>
    import { RouterLink } from 'vue-router'
    import { useUserStore } from '../stores/user';

    const userStore = useUserStore();
    
</script>
<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg-light custom-nav">
            <ul class="nav navbar-nav">
                <router-link to="/" class="nav-link active"> Sistema Web</router-link>
                <router-link to="Profesores" class="nav-link">Profesores</router-link>
                <router-link to="Asistencias" class="nav-link">Asistencias</router-link >
                <router-link to="Asignaturas" class="nav-link">Asignaturas</router-link>
                <router-link to="Licencias" class="nav-link">Licencias</router-link>
                <router-link to="Usuarios" class="nav-link">Usuarios</router-link>
                <router-link to="/login" class="nav-link" @click="$event => userStore.logout()">Cerrar Sesion</router-link>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.custom-nav {
    justify-content: center;
    /* Agrega otros estilos profesionales aquí */
}
</style>