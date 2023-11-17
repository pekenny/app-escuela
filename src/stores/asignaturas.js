import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert";
import { ref, reactive, onMounted, watch, computed } from "vue";
import { get } from "jquery";

export const useAsignaturasStore = defineStore("asignaturas", () => {
  const dataList = ref([]);
  const asigCarrera = ref([]);
  const asignatura = reactive({
    nameAsignatura: "",
    cantHoras: "",
  });

  const getAsignaturas = async () => {
    const request = await axios.get("http://localhost:3000/api/asignaturas");
    const data = await request.data;
    dataList.value = data;
  }

  const getAsignaturaCarrera = async () => {
    const request = await axios.get(
      "http://localhost:3000/api/asignaturasCarrera"
    );
    const data = await request.data;
    asigCarrera.value = data;
  }

  // Add Asignatura
  const addAsignatura = async () => {
    try {
      const request = await axios.post(
        "http://localhost:3000/api/asignaturas",
        asignatura.value,
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "json",
          withCredentials: false,
        }
      );
      const response = request.data;
      getAsignaturas();
      swal("Registro agregado correctamente", "Presiona el botón!", "success");
    } catch (error) {
      console.error(error);
      swal("Error al agregar el registro", "Presiona el botón!", "error");
    }
  };


  onMounted(() => {
    getAsignaturas();
    getAsignaturaCarrera();
  })

  const listAsignatura = computed(() => {
    return dataList.value;
  })

  watch(dataList, () => {
    getAsignaturas;
    console.log(dataList.value);
  }, {
      inmediate: true
  })
  return {
    asigCarrera,
    asignatura,
    listAsignatura,
    addAsignatura,
    getAsignaturas
  };
});
