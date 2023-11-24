<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

// obtener datos de localStorage
const userLogeado = JSON.parse(localStorage.getItem('data'));
console.log(userLogeado);

</script>
<template>
    <div>
        <nav class="navbar navbar-expand bg-light custom-nav" v-if="userLogeado.user[0].id_permisos === 1">
            <ul class="nav navbar-nav">
                <router-link to="/" class="nav-link active"> Sistema Web</router-link>
                <router-link to="Profesores" class="nav-link">Profesores</router-link>
                <router-link to="Asistencias" class="nav-link">Asistencias</router-link>
                <router-link to="Asignaturas" class="nav-link">Asignaturas</router-link>
                <router-link to="Licencias" class="nav-link">Licencias</router-link>
                <router-link to="Usuarios" class="nav-link">Usuarios</router-link>
                <router-link to="/login" class="nav-link" @click="$event => userStore.logout()">Cerrar Sesion</router-link>

                <div class="dropdown">
                    <a class="btn btn-light btn-sm dropdown-toggle" href="#" role="button" id="userDropdown"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-user"></i>
                    </a>
                    <ul class="dropdown-menu shadow p-3 mb-5 bg-body rounded" aria-labelledby="userDropdown">
                        <li>
                            <div class="p-3 flex-column align-items-center">
                                <div class="card-body">
                                    <h5 class="card-title text-center card-title">{{ userLogeado.user[0].nombre }}</h5>
                                    <p class="card-card-title text-center card-title">{{ userLogeado.user[0].correo }}</p>
                                    <p class="card-card-title text-center card-title">{{ userLogeado.user[0].rol }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </ul>
        </nav>
        <nav class="navbar navbar-expand navbar-light bg-light custom-nav" v-if="userLogeado.user[0].id_permisos === 2">
            <ul class="nav navbar-nav">
                <router-link to="/" class="nav-link active"> Sistema Web</router-link>
                <router-link to="Asistencias" class="nav-link">Asistencias</router-link>
                <router-link to="/login" class="nav-link" @click="$event => userStore.logout()">Cerrar Sesion</router-link>
                <!-- <li class="nav-link"><span class="nombre">{{ userLogeado.user[0].nombre }}</span></li>
                    <li class="nav-link"><span class="correo">{{ userLogeado.user[0].correo }}</span></li> -->
                <div class="dropdown">
                    <a class="btn btn-light btn-sm dropdown-toggle" href="#" role="button" id="userDropdown"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-user"></i>
                    </a>
                    <ul class="dropdown-menu shadow p-3 mb-5 bg-body rounded" aria-labelledby="userDropdown">
                        <li>
                            <div class="p-3 shadow-sm bg-light flex-column align-items-center">
                                <div class="card-body">
                                    <h5 class="card-title text-center card-title">{{ userLogeado.user[0].nombre }}</h5>
                                    <p class="card-card-title text-center card-title">{{ userLogeado.user[0].correo }}</p>
                                    <p class="card-card-title text-center card-title">{{ userLogeado.user[0].rol }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
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