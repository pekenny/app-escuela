<script setup>
import { ref } from 'vue';
import { useUsuariosStore } from '../stores/usuarios';
import { useProfesoresStore } from '../stores/profesores';

const usuariosStore = useUsuariosStore();
const profesoresStore = useProfesoresStore();

defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div>
        <div class="shadow p-3 mb-5 bg-body rounded">
            <div class="card-header">
                {{ title }}
            </div>
            <div class="card-body">

                <form action="" method="post" @submit.prevent="usuariosStore.addUsuario()">

                    <div class="mb-3">
                        <label for="usuario" class="form-label">Nombre: </label>
                        <input type="text" class="form-control" name="usuario" id="usuario" aria-describedby="helpId"
                            placeholder="Usuario" v-model="usuariosStore.user.usuario">
                    </div>

                    <div class="mb-3">
                        <label for="contrasena" class="form-label">Contraseña: </label>
                        <input type="text" class="form-control" name="contrasena" id="contrasena" aria-describedby="helpId"
                            placeholder="Contraseña" v-model="usuariosStore.user.contrasena">
                    </div>
                    <div class="mb-3">
                        <label for="Correo" class="form-label">Correo: </label>
                        <input type="email" class="form-control" name="Correo" id="Correo" aria-describedby="helpId"
                            placeholder="Correo" v-model="usuariosStore.user.correo">

                    </div>
                    <!-- select rol -->

                    <div class="mb-3">
                        <label for="rol" class="form-label">Rol: </label>
                        <select class="form-select" aria-label="Default select example" v-model="usuariosStore.user.rol">
                            <option selected>Roles disponibles</option>
                            <option v-for="rol in usuariosStore.roles" :key="rol.id" :value="rol.id">{{ rol.nombre }}
                            </option>
                        </select>
                    </div>

                    <!-- select rol -->

                    <div class="mb-3">
                        <label for="profesor" class="form-label">Vincular usuario a Profesor: </label>
                        <select class="form-select" aria-label="Default select example"
                            v-model="usuariosStore.user.id_profesor">
                            <option selected>Profesores disponibles</option>
                            <option v-for="profesor in profesoresStore.profComputed" :key="profesor.id" :value="profesor.id"
                                :disabled="profesor.id_profesor !== null">{{ profesor.id_profesor !== null ?
                                    profesor.nombreyapellido + ' - Vinculado' : profesor.nombreyapellido }}</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-success" style="margin: 1em;">Agregar </button>
                    <a name="" id="" class="btn btn-primary" href="index.php" role="button">Cancelar</a>
                </form>
            </div>
            <div class="card-footer text-muted"></div>
        </div>
    </div>
</template>


<style scoped>
.card {
    margin-top: 1em;
}
</style>