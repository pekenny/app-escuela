<script setup>
import { ref, watch } from 'vue';
import AgregarUsuario from '../components/AgregarProfesor.vue';
import { useProfesoresStore } from '../stores/profesores';
import { useRouter } from 'vue-router';
import DataTable from '../components/DataTable.vue';

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


const updateProfesores = (data) => {
    profesorStore.profesores.value = { ...data };
}


</script>

<template>
    <div>
        <div class="card text-bg-primary p-3">

            <h1 class="text-center">Listado de Profesores</h1>
        </div>
        <div class="card">
            <div class="card-header">
                <a name="" id="" class="btn btn-primary" role="button" @click="userView = !userView">
                    <span class="badge text-bg-primary">Agregar Profesor</span>
                </a>
            </div>
            <div class="card-body" v-if="!userView">
                <DataTable :columns="columns" :profesores="profesorStore.profesores" :title="title"/>

            </div>
        </div>

        <!-- Componente Usuario -->
        <AgregarUsuario v-if="userView" :title="title" />
    </div>
</template>


<style scoped></style>