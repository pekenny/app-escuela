<script setup>
import { ref,onMounted } from 'vue';
import AgregarUsuario from '../components/AgregarProfesor.vue';
import { useProfesoresStore } from '../stores/profesores';

const userView  = ref(false);
const title = ref('Profesor');

const userStore = useProfesoresStore();


</script>
<template>
    <div>
        <h1>Profesores</h1>
        <div class="card">
            <div class="card-header">
                <a name="" id="" class="btn btn-primary" role="button" @click="userView = !userView">
                    Agregar Profesor
                </a>
            </div>
            <div class="card-body">

                <div class="table-responsive-sm">
                    <table class="table table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre y Apellido </th>
                                <th scope="col">Teléfono </th>
                                <th scope="col">Foto </th>
                                <th scope="col">CV </th>
                                <th scope="col">Asignatura/s </th>
                                <th scope="col">Fecha de Ingreso </th>
                                <th scope="col">Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="" v-for="item in userStore.profesores" :key="item.id">
                                <td scope="row">{{ item.nombreyapellido }}</td>
                                <td>{{ item.telefono }}</td>
                                <td>{{ item.foto }}</td>
                                <td>{{ item.cv }}</td>
                                <td>Programacion I</td>
                                <td>{{ item.fechadeingreso }}</td>
                                <td>
                                    <input name="btnfojadeservicio" id="btnfojadeservicio" class="btn btn-primary"
                                        type="button" value="Foja de Servicio">
                                    |
                                    <input name="btneditar" id="btneditar" class="btn btn-info" type="button"
                                        value="Editar">
                                    |
                                    <input name="btnbaja" id="btnbaja" class="btn btn-danger" type="button" value="Baja">
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        <!-- Componente Usuario -->
        <AgregarUsuario v-if="userView" :title="title"/>
    </div>
</template>


<style scoped></style>