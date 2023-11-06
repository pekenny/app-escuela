<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <!-- place navbar here -->
  </header>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <ul class="nav navbar-nav">
      <router-link to="/" class="nav-link active"> Sistema Web</router-link>
      <router-link to="/secciones/profesores/" class="nav-link">Profesores</router-link>
      <router-link to="/secciones/asignaturas/" class="nav-link">Asignaturas</router-link>
      <router-link to="/secciones/usuarios/" class="nav-link">Licencias</router-link>
      <router-link to="/secciones/usuarios/" class="nav-link">Usuarios</router-link>
      <router-link to="/secciones/usuarios/" class="nav-link">Cerrar Sesion</router-link>
      <!-- <li class="nav-item">
        <a class="nav-link active" href="#" aria-current="page"> Sistema Web<span
            class="visually-hidden">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?php echo $url_base;?>secciones/profesores/">Profesores</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?php echo $url_base;?>secciones/asignaturas/">Asignaturas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?php echo $url_base;?>secciones/usuarios/">Licencias</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?php echo $url_base;?>secciones/usuarios/">Usuarios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cerrar Sesion</a>
      </li> -->
    </ul>
  </nav>
 <router-view></router-view>
</template>

<style scoped></style>
