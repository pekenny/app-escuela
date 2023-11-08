<script setup>
import { ref } from 'vue';
import AgregarUsuario from '../components/AgregarUsuario.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// validar que exista data en localStorage
if (!localStorage.getItem('data')) {
    router.push('/login');
}

const userView  = ref(false);
const title = ref('Usuario');
</script>
<template>
    <div>
        <h1>Usuarios</h1>
        <div class="card">
            <div class="card-header">
                <a name="" id="" class="btn btn-primary" @click="userView = !userView" role="button">
                    Agregar Usuario
                </a>
            </div>
            <div class="card-body">

                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id </th>
                                <th scope="col">Nombre del Usuario </th>
                                <th scope="col">Contraseña </th>
                                <th scope="col">Correo </th>
                                <th scope="col">Acciones </th>
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
                            <tr class="">
                                <td scope="row">Item</td>
                                <td>Item</td>
                                <td>Item</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        <!-- agegando componente usuario -->
        <agregarUsuario v-if="userView" :title="title"></agregarUsuario>
    </div>
</template>


<style scoped></style>