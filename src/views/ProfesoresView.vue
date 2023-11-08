<script setup>
import { ref, watch } from 'vue';
import AgregarUsuario from '../components/AgregarProfesor.vue';
import { useProfesoresStore } from '../stores/profesores';
import { useRouter } from 'vue-router';

const router = useRouter();
// validar que exista data en localStorage
if (!localStorage.getItem('data')) {
    router.push('/login');
}
const userView = ref(false);
const title = ref('Profesor');

const userStore = useProfesoresStore();

const updateProfesores = (data) => {
    userStore.profesores = {...data};
}
watch(userStore.profesores, (newValue) => {
    updateProfesores(newValue);
})
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
                                <th scope="col">Dni</th>
                                <th scope="col">Domicilio</th>
                                <th scope="col">Teléfono </th>
                                <th scope="col">Email </th>
                                <th scope="col">Foto </th>
                                <th scope="col">CV </th>                                
                                <th scope="col">Fecha de Ingreso </th>
                                <th scope="col">Fecha de Baja </th>                                
                                <th scope="col">Carrera </th>
                                <th scope="col">Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="" v-for="item in userStore.profesores" :key="item.id">
                                <td scope="row">{{ item.nombreyapellido }}</td>
                                <td>{{ item.dni }}</td>
                                <td>{{ item.domicilio }}</td>
                                <td>{{ item.telefono }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.foto }}</td>
                                <td>{{ item.cv }}</td>
                                <td>{{ item.fechadeingreso }}</td>
                                <td>{{ item.fechadebaja }}</td>
                                <td>{{ item.carrera }}</td>
                                <td>
                                    <input name="btnfojadeservicio" id="btnfojadeservicio" class="btn btn-primary btn-sm"
                                        type="button" value="Foja Servicio">
                                    |
                                    <input name="btneditar" id="btneditar" class="btn btn-info btn-sm" type="button"
                                        value="Editar">
                                    |
                                    <input name="btnbaja" id="btnbaja" class="btn btn-danger btn-sm" type="button" value="Baja">
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        <!-- Componente Usuario -->
        <AgregarUsuario v-if="userView" :title="title" />
    </div>
</template>


<style scoped></style>