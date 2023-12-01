<script setup>
import { ref } from 'vue';
defineProps({
    title: {
        type: String,
        required: true
    }
})

const title = ref('Licencias');
</script>
<template>
    <div>
        <div class="">
            <div class="card-header border">
                <h5 class="card-title text-center bg-warning p-3 text-white">Formulario para agregar {{ title }}</h5>
            </div>
            <div class="card-body">

                <form action="" method="post" enctype="multipart/form-data">

                    <div class="mb-3">
                        <label for="asignatura" class="form-label">Nombre: </label>
                        <input type="text" class="form-control" name="asignatura" id="asignatura" aria-describedby="helpId"
                            placeholder="asignatura">
                    </div>
                   <div class="mb-3">
                    <label for="fechaInicio" class="form-label">Fecha Inicio</label>
                    <input type="date" class="form-control" name="fechaInicio" id="fechaInicio" aria-describedby="helpId" placeholder="Fecha Inicio">
                   </div>
                   <div class="mb-3">
                    <label for="fechaFin" class="form-label">Fecha Fin</label>
                    <input type="date" class="form-control" name="fechaFin" id="fechaFin" aria-describedby="helpId" placeholder="Fecha Fin">
                   </div>
                   <div class="mb-3">
                    <label for="idProfesor" class="form-label">Id Profesor</label>
                    <input type="text" class="form-control" name="idProfesor" id="idProfesor" aria-describedby="helpId" placeholder="Id Profesor">
                   </div>
                   <div class="mb-3">
                    <label for="idTipoLicencia" class="form-label">Id Tipo Licencia</label>
                    <input type="text" class="form-control" name="idTipoLicencia" id="idTipoLicencia" aria-describedby="helpId" placeholder="Id Tipo Licencia">
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