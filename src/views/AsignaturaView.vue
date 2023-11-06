<script setup>
 import { ref } from 'vue';
 import AgregarAsignatura from '../components/AgregarAsignatura.vue';

 const asignView  = ref(false);
 const title = ref('Asignatura');
</script>
<template>
    <div>
        <h1>Asignatura</h1>
        <div class="card">
            <div class="card-header">
                <a name="" id="" class="btn btn-primary" role="button" @click="asignView = !asignView">
                    Agregar Asignatura
                </a>
            </div>
            <div class="card-body">

                <div class="table-responsive">

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id </th>
                                <th scope="col">Nombre de la Asignatura </th>
                                <th scope="col">Cantidad de Hs </th>
                                <th scope="col">Carrera </th>
                                <th scope="col">Profesor </th>
                                <th scope="col">Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
        <!-- componente asignatura -->
        <AgregarAsignatura v-if="asignView" :title="title"/>
    </div>
</template>


<style lang="scss" scoped></style>