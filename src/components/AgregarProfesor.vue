<script setup>
import { ref } from 'vue';
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div>
        <div class="card">
            <div class="card-header">
                {{ title }}
            </div>
            <div class="card-body">

                <form action="" method="post" enctype="multipart/form-data">

                    <div class="mb-3">
                        <label for="usuario" class="form-label">Nombre: </label>
                        <input type="text" class="form-control" name="usuario" id="usuario" aria-describedby="helpId"
                            placeholder="Usuario">
                    </div>

                    <div class="mb-3">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input type="text" class="form-control" name="telefono" id="telefono" aria-describedby="helpId"
                            placeholder="Escriba su Telefono">

                    </div>
                    <div class="mb-3">
                        <label for="foto" class="form-label">Foto</label>
                        <input type="file" class="form-control" name="foto" id="foto" aria-describedby="helpId" placeholder="Escriba su Telefono">
                    </div>
                    <div class="mb-3">
                        <label for="cv" class="form-label">CV</label>
                        <input type="file" class="form-control" name="cv" id="cv" aria-describedby="helpId" placeholder="Escriba su Telefono">
                    </div>
                    <div class="mb-3">
                        <label for="asignatura" class="form-label">Asignatura</label>
                        <input type="text" class="form-control" name="asignatura" id="asignatura" aria-describedby="helpId" placeholder="Escriba su Telefono">
                    </div>
                    <div class="mb-3">
                        <label for="fecha" class="form-label">Fecha de Ingreso</label>
                        <input type="date" class="form-control" name="fecha" id="fecha" aria-describedby="helpId" placeholder="Escriba su Telefono">
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