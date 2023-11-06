<script setup>

</script>
<template>
    <div>
        <h1>Licencias</h1>
        <div class="card">
            <div class="card-header">
                <a name="" id="" class="btn btn-primary" href="crear.php" role="button">
                    Agregar Usuario
                </a>
            </div>
            <div class="card-body">

                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id </th>
                                <th scope="col">Nombre del Usuario </th>
                                <th scope="col">Contraseña </th>
                                <th scope="col">Correo </th>
                                <th scope="col">Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td scope="row">1</td>
                                <td>JFJ</td>
                                <td>******</td>
                                <td>juanfjimenes@gmail.com</td>
                                <td>
                                    <input name="btneditar" id="btneditar" class="btn btn-info" type="button"
                                        value="Editar">
                                    |
                                    <input name="btnborrar" id="btnborrar" class="btn btn-danger" type="button"
                                        value="Eliminar">
                                </td>
                            </tr>
                            <tr class="">
                                <td scope="row">Item</td>
                                <td>Item</td>
                                <td>Item</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    </div>
</template>


<style scoped></style>