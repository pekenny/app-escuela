<script setup>
import { ref, onMounted, watch } from 'vue';
import { useProfesoresStore } from '../stores/profesores';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.css';
import 'datatables.net-buttons-bs5';
import 'datatables.net-buttons/js/buttons.print.mjs';
import jszip from 'jszip';
import pdfmake from 'pdfmake';
import 'datatables.net-autofill-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import moment from 'moment';


const props = defineProps({
    title: {
        type: String,
        required: true
    },
    columns: {
        type: Array,
        required: true
    },
    profesores: {
        type: Array

    },
    asistencias: {
        type: Array

    },
    asignaturas: {
        type: Array

    },
    usuarios: {
        type: Array
    }

})
const profesorStore = useProfesoresStore();


onMounted(() => {

    $('#' + props.title + '').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
        },
        paging: true,



    }).draw();
})

</script>
<template>
    <div>

        <table :id="title" class="table table-hover table-striped" width="100%">
            <thead>
                <tr>
                    <th class="text-center p-3 bg-dark text-white bg-gradient responsive" v-for="column in columns" :key="column">{{ column.data }}</th>
                </tr>
            </thead>
            <tbody>
                <!-- Profesores -->
                <tr v-for="profesor in profesores" :key="profesor" v-if="title == 'Profesor'">
                    <td>{{ profesor.nombreyapellido }}</td>
                    <td>{{ profesor.dni }}</td>
                    <td>{{ profesor.domicilio }}</td>
                    <td>{{ profesor.telefono }}</td>
                    <td>{{ profesor.email }}</td>
                    <td><img style="width: 50px;" :src="`http://localhost:3000/uploads/${profesor.foto}`" alt=""></td>
                    <td><a target="_blank" :href="`http://localhost:3000/uploads/${profesor.cv}`">{{ profesor.cv }}</a></td>
                    <td>{{ moment(profesor.fechadeingreso).format('DD/MM/YYYY') }}</td>
                    <td>{{ moment(profesor.fechadebaja).format('DD/MM/YYYY') }}</td>
                    <td class="d-flex"><button class="btn btn-success btn-sm" data-bs-toggle="modal"
                            :data-bs-target="'#' + profesor.id">
                            <i class="fas fa-edit"></i></button>
                        <button class="btn btn-danger btn-sm" style="margin: auto 2px;"
                            @click="$event => profesorStore.eliminarProfesor(profesor.id)"><i
                                class="fas fa-trash-alt"></i></button>
                    </td>

                </tr>
                <!-- Asistencias -->
                <tr v-for="asistencia in asistencias" :key="asistencia" v-else-if="title == 'Asistencia'">
                    <td>{{ asistencia.nombreyapellido }}</td>
                    <td>{{ moment(asistencia.fecha).format('DD/MM/YYYY HH:mm:ss') }}</td>
                    <td
                        :class="asistencia.estado == 'salida' ? 'bg-danger p-2 text-white bg-opacity-75' :
                            asistencia.estado == 'justificado' ? 'bg-warning p-2 text-white bg-opacity-75' : 'bg-success p-2 text-white bg-opacity-75'">
                        {{ asistencia.estado }}</td>
                </tr>
                <!-- Asignaturas -->
                <tr v-for="asignatura in asignaturas" :key="asignatura" v-else-if="title == 'Asignatura'">
                    <td>{{ asignatura.id }}</td>
                    <td>{{ asignatura.nombreAsignatura }}</td>
                    <td>{{ asignatura.cantidad_horas }}</td>
                    <td>{{ asignatura.nombreCarrera }}</td>
                    <td>{{ asignatura.nombreyapellido }}</td>
                    <td><button class="btn btn-sm btn-success"
                            @click="asignaturaStore.editAsignatura(asignatura)"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-sm btn-danger" style="margin: auto 2px;"
                            @click="asignaturaStore.eliminarAsignatura(asignatura)"><i class="fas fa-trash-alt"></i></button>
                    </td>
                </tr>

                <!-- Usuarios -->
                <tr v-for="usuario in usuarios" :key="usuario" v-else-if="title == 'Usuario'">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nombre }}</td>
                    <td>{{ usuario.password }}</td>
                    <td>{{ usuario.correo }}</td>
                    <td>{{ usuario.nombrePermiso }}</td>
                </tr>

            </tbody>
        </table>

    </div>
</template>


<style scoped>
table {
    text-align: center;
    font-size: small;
}

thead {
    font-variant-caps: all-petite-caps;
}
</style>