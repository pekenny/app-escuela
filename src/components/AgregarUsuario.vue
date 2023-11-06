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
                        <label for="contrasena" class="form-label">Contraseña: </label>
                        <input type="text" class="form-control" name="contrasena" id="contrasena"
                            aria-describedby="helpId" placeholder="Contraseña">
                    </div>
                    <div class="mb-3">
                        <label for="Correo" class="form-label">Correo: </label>
                        <input type="email" class="form-control" name="Correo" id="Correo" aria-describedby="helpId"
                            placeholder="Correo">
                    
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