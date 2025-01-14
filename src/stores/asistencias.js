import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert";
import { ref, reactive, onMounted, watch, computed } from "vue";

export const useAsistenciasStore = defineStore("asistencias", () => {
  const asistenciaProfesor = ref([]);
  const statusAsistencia = ref(false);
  const asistencias = reactive({
    profesor: "",
    fecha: "",
    estado: "",
    asignatura: ""

  });

  // Obtener las asistencias
  const getAsistencia = async () => {
    const request = await axios.get("http://localhost:3000/api/asistencias/");   
    asistenciaProfesor.value = request.data;
  };

 onMounted(async () => {
   await getAsistencia();
   if(!localStorage.getItem("asistencia_status")){
     localStorage.setItem("asistencia_status", false);
   }
 })

  // Agregar Asistencia
  const addAsistencia = async () => {
    try {
      const request = await axios.post(
        "http://localhost:3000/api/asistencias",
        asistencias,
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
     
      getAsistencia();

      swal("Registro agregado correctamente", "Presiona el botón!", "success");
    } catch (error) {
      console.error(error);
      swal("Error al agregar el registro", "Presiona el botón!", "error");
    }
  };

  watch(
    [asistenciaProfesor, statusAsistencia],
    () => {
      getAsistencia;
      // console.log(asistenciaProfesor);
      localStorage.setItem("asistencia_status", statusAsistencia.value);
    },
    { inmediate: true }
  );

  const asistenciaP = computed(() => {
    return asistenciaProfesor.value;
  })

  return {
    getAsistencia,
    asistenciaP,
    asistencias,
    addAsistencia,
    statusAsistencia
  };
});
