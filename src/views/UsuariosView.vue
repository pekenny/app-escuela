<script setup>
import { ref } from 'vue';
import AgregarUsuario from '../components/AgregarUsuario.vue';
import { useRouter } from 'vue-router';
import { useUsuariosStore } from '../stores/usuarios';
import DataTable from '../components/DataTable.vue';


const usuariosStore = useUsuariosStore();
const userView  = ref(false);
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
        <div class="p-3">
            <div class="card-header">
                <a name="" id="" class="btn btn-primary" @click="userView = !userView" role="button">
                    Agregar Usuario
                </a>
            </div>
            <div class="card-body">

                <!-- <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id </th>
                                <th scope="col">Nombre del Usuario </th>
                                <th scope="col">Contraseña </th>
                                <th scope="col">Correo </th>
                                <th scope="col">Rol </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td scope="row">1</td>
                                <td>JFJ</td>
                                <td>******</td>
                                <td>juanfjimenes@gmail.com</td>
                                <td>
                                    <input name="btneditar" id="btneditar" class="btn btn-info" type="button"
                                        value="Editar">
                                    |
                                    <input name="btnborrar" id="btnborrar" class="btn btn-danger" type="button"
                                        value="Eliminar">
                                </td>
                            </tr>
                          
                        </tbody>
                    </table>
                </div> -->
                <DataTable :columns="columns" :title="title" :usuarios="usuariosStore.users"/>
            </div>
        </div>
        <!-- agegando componente usuario -->
        <agregarUsuario v-if="userView" :title="title"></agregarUsuario>
    </div>
</template>


<style scoped></style>