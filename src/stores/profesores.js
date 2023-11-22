import { ref, reactive, onMounted, watch, computed } from "vue";
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
    // fotoFIle: {},
    fotoName:"",
    // cv: {},
    cvName: "",
    fechadeingreso: "",
    fechadebaja: ""   
  });
 
  const getProfesores = async () => {
    const request = await fetch("http://localhost:3000/api/profesores");
    const data = await request.json();
    profesores.value = data;
  }
  // onMounted(async () => {
  //   const request = await fetch("http://localhost:3000/api/profesores");
  //   const data = await request.json();
  //   profesores.value.push(...data);
  // });
  onMounted(async () => {
    await getProfesores();
  })

const addProfesor = async () => {
  try {
    const photoResponse = await axios.post(
      "http://localhost:3000/api/uploadPhoto",
      { photo: profesor.fotoFile },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "json",
        withCredentials: false,
      }
    );
    console.log(photoResponse.data);
   
    const cvRequest = await axios.post(
      "http://localhost:3000/api/uploadCv",
      { cv: profesor.cvFile },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "json",
        withCredentials: false,
      }
    );
    console.log(cvRequest.data);
    // profesor.foto.nameFoto = profesor.foto.originalname;
    const profesorResponse = await axios.post(
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

    if (profesorResponse.status !== 200) {
      throw new Error(`Error al agregar profesor: ${profesorResponse.status}`);
    }

    console.log(profesorResponse.data);
    getProfesores();
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

  const profComputed = computed(() => {
    return profesores.value;
  })

   watch(profesores, () => {
    getProfesores;  
    
  },{
    immediate: true
  })

  return {
    profesor,
    profComputed,
    addProfesor,
    eliminarProfesor,
    updateProfesor
  };
});
