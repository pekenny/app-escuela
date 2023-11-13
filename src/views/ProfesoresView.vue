<script setup>
import { ref, watch } from 'vue';
import AgregarProfesor from '../components/profesor/AgregarProfesor.vue';
import { useProfesoresStore } from '../stores/profesores';
import { useRouter, RouterLink, RouterView } from 'vue-router';
import DataTable from '../components/DataTable.vue';
import Modal from '../components/profesor/Modal.vue';

const userView = ref(false);
const title = ref('Profesor');
const columns = [
    { data: 'nombreyapellido', title: 'Nombre y Apellido' },
    { data: 'dni', title: 'DNI' },
    { data: 'domicilio', title: 'Domicilio' },
    { data: 'telefono', title: 'Telefono' },
    { data: 'email', title: 'Email' },
    { data: 'foto', title: 'Foto' },
    { data: 'cv', title: 'CV' },
    { data: 'fechadeingreso', title: 'Fecha de Ingreso' },
    { data: 'fechadebaja', title: 'Fecha de Baja' },
    {
        data: 'Acciones'
    }
]

const router = useRouter();
// validar que exista data en localStorage
if (!localStorage.getItem('data')) {
    router.push('/login');
}


const profesorStore = useProfesoresStore();


// const updateProfesores = (data) => {
//     profesorStore.profesores.value = { ...data };
// }


</script>

<template>
    <div>
        <div class="card text-bg-primary p-3">

            <h1 class="text-center">Listado de Profesores</h1>
        </div>
        <div class="card">
            <div class="card-header">
               
                <router-link class="btn btn-primary m-1" to="/agregarProfesor" @click="userView = !userView">Agregar Profesor</router-link>
                <!-- <RouterLink class="btn btn-primary m-1" to="/asistenciasProfesor" @click="userView = !userView">Asistencia</RouterLink> -->
             
            </div>
            <div class="card-body" v-if="!userView">
                <DataTable :columns="columns" :profesores="profesorStore.profComputed" :title="title" />
                <Modal :title="title" v-for="profesor in profesorStore.profComputed" :key="profesor.id"
                    :profesor="profesor" />
            </div>
        </div>

       
        <RouterView v-if="userView"></RouterView>
    </div>
</template>


<style scoped></style>