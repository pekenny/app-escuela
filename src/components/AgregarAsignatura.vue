<script setup>
import { ref } from 'vue';
import { useAsignaturasStore } from '../stores/asignaturas';
defineProps({
    title: {
        type: String,
        required: true
    }
})

const asignaturaStore = useAsignaturasStore();
</script>
<template>
    <div>
        <div class="shadow p-3 mb-5 bg-body rounded">
            <div class="card-header">
                {{ title }}
            </div>
            <div class="card-body">

                <form action="" method="post" enctype="multipart/form-data" @submit.prevent="asignaturaStore.addAsignatura()">

                <div class="mb-3">
                    <label for="asignatura" class="form-label">Nombre: </label>
                    <input type="text" class="form-control" name="asignatura" id="asignatura" aria-describedby="helpId"
                        placeholder="asignatura" v-model="asignaturaStore.asignatura.nombre">
                </div>
                <!-- <div class="mb-3">
                    <label for="cantHoras" class="form-label">Cant. Horas</label>
                    <input type="number" class="form-control" name="cantHoras" id="cantHoras" aria-describedby="helpId"
                            placeholder="Escriba su Telefono" v-model="asignaturaStore.asignatura.cantHoras">
                    </div> -->
                    <!-- <div class="mb-3">
                            <label for="carrera" class="form-label">Carrera: </label>
                            <input type="text" class="form-control" name="carrera" id="carrera" aria-describedby="helpId"
                                placeholder="Escriba su Carrera">
                        </div>
                        <div class="mb-3">
                            <label for="profesor" class="form-label">Profesor: </label>
                            <input type="text" class="form-control" name="profesor" id="profesor" aria-describedby="helpId"
                                placeholder="Escriba su Profesor">
                        </div> -->





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