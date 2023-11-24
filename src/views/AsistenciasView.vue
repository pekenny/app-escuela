<script setup>
import { useProfesoresStore } from '../stores/profesores';
import { useAsistenciasStore } from '../stores/asistencias';
import DataTable from '../components/DataTable.vue';
import { ref } from 'vue';

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
                            <select class="form-select" aria-label="Default select example" id="prof" v-model="asistenciaStore.asistencias.profesor">
                                <option selected>Seleccione una opción</option>
                                <option v-for="profesor in profesorStore.profComputed" :key="profesor.id"
                                    :value="profesor.id">{{ profesor.nombreyapellido }}</option>

                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="fecha" class="form-label">Fecha</label>
                            <input type="date" class="form-control" id="fecha" v-model="asistenciaStore.asistencias.fecha">
                        </div>
                        <div class="mb-3">
                            <label for="Estado" class="form-label">Estado</label>
                           <select class="form-select" aria-label="Default select example" id="Estado" v-model="asistenciaStore.asistencias.estado">
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
    </div>
</template>


<style scoped></style>