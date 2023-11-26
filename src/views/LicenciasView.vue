<script setup>
import { ref } from 'vue';
import AgregarLicencia from '../components/AgregarLicencia.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// validar que exista data en localStorage
if (!localStorage.getItem('data')) {
    router.push('/login');
}

const licView = ref(false);
const title = ref('Licencia');
</script>
<template>
    <div>
        <div class="text-bg-primary p-3 bg-gradient">
            <h1 class="text-center">Licencias</h1>

        </div>
        <div class="p-3">
            <div class="card-header">
                <a name="" id="" class="btn btn-primary" role="button" @click="licView = !licView">
                    Agregar Licencia
                </a>
            </div>
            <div class="card-body">

                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id </th>
                                <th scope="col">Nombre del Usuario </th>
                                <th scope="col">Fecha Inicio </th>
                                <th scope="col">Fecha Fin </th>
                                <th scope="col">id profesor </th>
                                <th scope="col">id tipo licencia </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td scope="row">1</td>
                                <td>JFJ</td>
                                <td>12/12/2019</td>
                                <td>12/12/2019</td>
                                <td>1</td>
                                <td>1</td>
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
                </div>

            </div>

        </div>
        <AgregarLicencia v-if="licView" :title="title"></agregarLicencia>
    </div>
</template>


<style scoped></style>