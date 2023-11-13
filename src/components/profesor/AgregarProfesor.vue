<script setup>
import { useProfesoresStore } from '../../stores/profesores';

defineProps({
    title: {
        type: String,
        required: true
    }
})

const profesorStore = useProfesoresStore();


</script>
<template>
    <div>
        <div class="card">
            <div class="card-header border">
                <h5 class="card-title text-center">Formulario para agregar {{ title }}</h5>
            </div>
            <div class="card-body">

                <form @submit.prevent="profesorStore.addProfesor">

                    <div class="mb-3">
                        <label for="usuario" class="form-label">Nombre: </label>
                        <input type="text" class="form-control" name="usuario" id="usuario" aria-describedby="helpId"
                            placeholder="Usuario" v-model="profesorStore.profesor.nombreyapellido">
                    </div>
                    <div class="mb-3">
                        <label for="dni" class="form-label">DNI: </label>
                        <input type="text" class="form-control" name="dni" id="dni" aria-describedby="helpId"
                            placeholder="dni" v-model="profesorStore.profesor.dni">
                    </div>
                    <div class="mb-3">
                        <label for="domicilio" class="form-label">Domicilio: </label>
                        <input type="text" class="form-control" name="domicilio" id="domicilio" aria-describedby="helpId"
                            placeholder="domicilio" v-model="profesorStore.profesor.domicilio">
                    </div>

                    <div class="mb-3">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input type="text" class="form-control" name="telefono" id="telefono" aria-describedby="helpId"
                            placeholder="Escriba su Telefono" v-model="profesorStore.profesor.telefono">

                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email: </label>
                        <input type="text" class="form-control" name="email" id="email" aria-describedby="helpId"
                            placeholder="email" v-model="profesorStore.profesor.email">
                    </div>
                    <div class="mb-3">
                        <label for="foto" class="form-label">Foto</label>
                        <input type="file" class="form-control" name="foto" id="foto" aria-describedby="helpId"
                            @change="profesorStore.profesor.foto = $event.target.files[0].name">
                    </div>
                    <div class="mb-3">
                        <label for="cv" class="form-label">CV</label>
                        <input type="file" class="form-control" name="cv" id="cv" aria-describedby="helpId"
                            @change="$event => profesorStore.profesor.cv = $event.target.files[0].name">
                    </div>

                    <div class="mb-3">
                        <label for="fecha" class="form-label">Fecha de Ingreso</label>
                        <input type="date" class="form-control" name="fecha" id="fecha" aria-describedby="helpId"
                            placeholder="Escriba su Telefono" v-model="profesorStore.profesor.fechadeingreso">
                    </div>
                    <div class="mb-3">
                        <label for="fechabaja" class="form-label">fecha de Baja</label>
                        <input type="date" class="form-control" name="fechabaja" id="fechabaja" aria-describedby="helpId"
                            placeholder="Escriba su Telefono" v-model="profesorStore.profesor.fechadebaja">
                    </div>

                    <button type="submit" class="btn btn-success" style="margin: 1em;">Agregar </button>
                    <a name="" id="" class="btn btn-primary" role="button">Cancelar</a>
                </form>
            </div>
            <div class="card-footer text-muted"></div>
        </div>
    </div>
</template>


<style scoped>

</style>