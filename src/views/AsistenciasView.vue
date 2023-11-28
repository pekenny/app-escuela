<script setup>
import { useProfesoresStore } from '../stores/profesores';
import { useAsistenciasStore } from '../stores/asistencias';
import { useAsignaturasStore } from '../stores/asignaturas';

import DataTable from '../components/DataTable.vue';
import moment from 'moment';
import { ref } from 'vue';

const asignaturaStore = useAsignaturasStore();
const asistenciaStore = useAsistenciasStore();
const profesorStore = useProfesoresStore();

const title = ref('Asistencia');


const columns = [
    { data: 'profesor', title: 'Profesor' },
    { data: 'fecha', title: 'Fecha' },
    { data: 'asistencia', title: 'Asistencia' }

]

const userLogeado = JSON.parse(localStorage.getItem('data'));

</script>
<template>
    <div>
        <div class="container">
            <div class="row">
                <div :class="userLogeado.user[0].id_permisos === 1 ? 'col-6' : 'col-12'">
                    <h1 class="text-center card-title p-3 bg-primary text-white bg-gradient">Formulario de Asistencia</h1>
                    <!-- Formulario -->
                    <form class="shadow p-3 mb-5 bg-body rounded" @submit.prevent="asistenciaStore.addAsistencia()">
                        <div class="mb-3">
                            <label for="prof" class="form-label">Profesor</label>

                            <select v-if="userLogeado.user[0].id_permisos === 1" class="form-select"
                                aria-label="Default select example" id="prof"
                                v-model="asistenciaStore.asistencias.profesor">
                                <option selected>Seleccione una opción</option>
                                <option v-for="profesor in profesorStore.profComputed" :key="profesor.id"
                                    :value="profesor.id">{{ profesor.nombreyapellido }}</option>

                            </select> -->
                            <input type="hidden" class="form-control" id="prof" :value="asistenciaStore.asistencias.profesor = userLogeado.user[0].id" readonly>
                        </div>
                        <!-- asignaturas -->
                        <div class="mb-3">
                            <label for="asignatura" class="form-label">Asignatura</label>
                            <select class="form-select" aria-label="Default select example" id="asignatura" v-model="asistenciaStore.asistencias.asignatura">
                                <option selected>Seleccione una asignatura</option>
                                <option v-for="asignatura in asignaturaStore.listAsignatura" :key="asignatura.id"
                                    :value="asignatura.id">{{ asignatura.nombre }}</option>
                            </select>
                            <input v-if="userLogeado.user[0].id_permisos === 2" type="hidden" class="form-control" id="prof"
                                :value="asistenciaStore.asistencias.profesor = userLogeado.user[0].id" readonly>
                        </div>
                        <!-- asignaturas -->
                        <div class="mb-3">
                            <label for="asignatura" class="form-label">Asignatura</label>
                            <select class="form-select" aria-label="Default select example" id="asignatura"
                                v-model="asistenciaStore.asistencias.asignatura">
                                <option selected>Seleccione una asignatura</option>
                                <option v-for="asignatura in asignaturaStore.listAsignatura" :key="asignatura.id"
                                    :value="asignatura.id">{{ asignatura.nombre }}</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="fecha" class="form-label">Fecha</label>
                            <!-- <input type="date" class="form-control" id="fecha" v-model="asistenciaStore.asistencias.fecha"> -->
                            <input type="text" class="form-control" id="fecha"
                                :value="asistenciaStore.asistencias.fecha = moment().format('YYYY-MM-DD HH:mm:ss')">
                        </div>
                        <div class="mb-3">
                            <label for="Estado" class="form-label">Estado</label>
                            <select class="form-select" aria-label="Default select example" id="Estado"
                                v-model="asistenciaStore.asistencias.estado">
                                <option selected>Seleccione una opción</option>
                                <option value="presente">Presente</option>
                                <option value="ausente">Ausente</option>
                                <option value="justificado">Justificado</option>
                            </select>
                        </div>

                        <button type="submit" class="btn btn-success">Guardar</button>

                        <!-- Otros elementos del formulario -->
                    </form>
                </div>
                <div class="col-lg-6 shadow p-3 mb-5 bg-body rounded" v-if="userLogeado.user[0].id_permisos === 1">
                    <h1 class="text-center card-title p-3 bg-primary text-white bg-gradient">Listado de Asistencias</h1>
                    <DataTable class="py-2" :columns="columns" :asistencias="asistenciaStore.asistenciaP" :title="title" />
                </div>
            </div>
        </div>
</div></template>


<style scoped></style>