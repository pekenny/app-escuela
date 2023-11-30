<script setup>
import { ref } from 'vue';
import AgregarUsuario from '../components/AgregarUsuario.vue';
import { useRouter } from 'vue-router';
import { useUsuariosStore } from '../stores/usuarios';
import DataTable from '../components/DataTable.vue';


const usuariosStore = useUsuariosStore();
const userView = ref(false);
const title = ref('Usuario');

const router = useRouter();
// validar que exista data en localStorage
if (!localStorage.getItem('data')) {
    router.push('/login');
}


const columns = [
    { data: 'id' },
    { data: 'usuario' },
    { data: 'contraseña' },
    { data: 'correo' },
    { data: 'rol' },
];


</script>
<template>
    <div>
        <div class="text-bg-primary p-3 bg-gradient">
            <h1 class="text-center">Usuarios</h1>

        </div>
        <div class="shadow p-3 mb-5 bg-body rounded">
            <div class="card-header">
                <a name="" id="" class="btn btn-primary" @click="userView = !userView" role="button">
                    Agregar Usuario
                </a>
            </div>

        </div>
        <div class="">

            <DataTable class="shadow p-3 mb-5 bg-body rounded" :columns="columns" :title="title" :usuarios="usuariosStore.users" />
        </div>
        <!-- agegando componente usuario -->
        <agregarUsuario v-if="userView" :title="title"></agregarUsuario>
    </div>
</template>


<style scoped></style>