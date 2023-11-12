<script setup>
import { useProfesoresStore } from '../../stores/profesores';
const profesorStore = useProfesoresStore();
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    profesor: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div>
        <!-- crear Modal boostrap -->
        <div class="modal fade" :id="profesor.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header card text-white bg-success">
                        <h5 class="modal-title" id="exampleModalLabel"> Formulario de actualización</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="#">
                            <div class="mb-3">
                                <label for="usuario" class="form-label">Nombre: </label>
                                <input type="text" class="form-control" name="usuario" id="usuario"
                                    aria-describedby="helpId" placeholder="Usuario" v-model="profesor.nombreyapellido">
                            </div>
                            <div class="mb-3">
                                <label for="dni" class="form-label">DNI: </label>
                                <input type="text" class="form-control" name="dni" id="dni" aria-describedby="helpId"
                                    placeholder="dni" v-model="profesor.dni">
                            </div>
                            <div class="mb-3">
                                <label for="domicilio" class="form-label">Domicilio: </label>
                                <input type="text" class="form-control" name="domicilio" id="domicilio"
                                    aria-describedby="helpId" placeholder="domicilio" v-model="profesor.domicilio">
                            </div>
                            <div class="mb-3">
                                <label for="telefono" class="form-label">Telefono</label>
                                <input type="text" class="form-control" name="telefono" id="telefono"
                                    aria-describedby="helpId" placeholder="Escriba su Telefono" v-model="profesor.telefono">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email: </label>
                                <input type="text" class="form-control" name="email" id="email" aria-describedby="helpId"
                                    placeholder="email" v-model="profesor.email">
                            </div>
                            <div class="mb-3">
                                <label for="foto" class="form-label">Foto</label>
                                <input type="file" class="form-control" name="foto" id="foto" aria-describedby="helpId"
                                    @change="profesor.foto = $event.target.files[0].name">
                            </div>
                            <div class="mb-3">
                                <label for="cv" class="form-label">CV</label>
                                <input type="file" class="form-control" name="cv" id="cv" aria-describedby="helpId"
                                    @change="$event => profesor.cv = $event.target.files[0].name">
                            </div>
                            <div class="mb-3">
                                <label for="fechadeingreso" class="form-label">Fecha de Ingreso</label>
                                <input type="date" class="form-control" name="fechadeingreso" id="fechadeingreso"
                                    aria-describedby="helpId" placeholder="Escriba su Telefono"
                                    v-model="profesor.fechadeingreso">
                            </div>
                            <div class="mb-3">
                                <label for="fechabaja" class="form-label">fecha de Baja</label>
                                <input type="date" class="form-control" name="fechabaja" id="fechabaja"
                                    aria-describedby="helpId" placeholder="Escriba su Telefono"
                                    v-model="profesor.fechadebaja">
                            </div>


                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-success"
                            @click="profesorStore.updateProfesor(profesor)">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* aplicar estilos a todos los input */
input[type="text"],
input[type="date"],
input[type="file"] {
    font-size: small;
    width: 100%;
    padding: 0.375rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

}

/* aplicar estilos a los labels */
label {
    font-size: small;
}</style>
