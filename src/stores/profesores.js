import { ref, reactive, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import swal from 'sweetalert';


export const useProfesoresStore = defineStore("profesores", () => {
  const profesores = ref([]);
  const profesor = reactive({
    nombreyapellido: "",
    dni: "",
    domicilio: "",
    telefono: "",
    email: "",
    foto: {},
    cv: {},
    fechadeingreso: "",
    fechadebaja: "",
  });

  onMounted(async () => {
    const request = await fetch("http://localhost:3000/api/profesores");
    const data = await request.json();
    profesores.value.push(...data);
  });

  const addProfesor = async () => {
    // peticion post con axios a API
    try {
      const request = await axios.post(
        "http://localhost:3000/api/profesores",
        profesor,
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "json",
          withCredentials: false,
        }
      );

      if (request.status !== 200) {
        throw new Error(`Error al agregar profesor: ${request.status}`);
      }

      const response = request.data;
      profesores.value.push(response);
      swal("Registro agregado correctamente", "Presiona el botón!", "success");
    } catch (error) {
      console.error(error);
      swal("Error al agregar el registro", "Presiona el botón!", "error");
    }
  };

  const eliminarProfesor = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/profesores/${id}`
      );
      console.log(response.data);

      const index = profesores.value.findIndex(
        (profesor) => profesor.id === id
      );
      profesores.value.splice(index, 1);
    } catch (error) {
      console.error(error);
      // Mostrar mensaje de error al usuario
    }
  };

  const updateProfesor = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/profesores/${data.id}`,
        data
      );
      swal("Registro actualizado correctamente", "Presiona el botón!", "success")
      console.log(response.data);
    } catch (error) {
      swal("Error al actualizar el registro", "Presiona el botón!", "error")
      console.error(error);
      // Mostrar mensaje de error al usuario
    }
  };

  return {
    profesor,
    profesores,
    addProfesor,
    eliminarProfesor,
    updateProfesor
  };
});
