import { reactive, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useProfesoresStore = defineStore("profesores", () => {
  const profesores = reactive([]);
  const profesor = reactive({
    nombreyapellido: "",
    telefono: "",
    foto: {},
    cv: {},
    asignatura: "",
    fechadeingreso: "",
  });

  onMounted(async () => {
    const request = await fetch(
      "http://localhost/abm-scool/public/profesores/profesores"
    );
    const data = await request.json();
    profesores.push(...data);
  });

  const addProfesor = async () => {

    // peticion post con axios
    try {
      const response = await axios.post("http://localhost/abm-scool/public/profesores/profesores", profesor);
      const data = response.data;
      console.log(data);
      profesores.push(data);
    } catch (error) {
      console.error(error);
    }

    // uploadFoto();
    // uploadCV();
    
  };

//   const uploadFoto = async () => {
//     const file = profesor.foto[0];   
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("/assets/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         console.log("Archivo 1 subido exitosamente");
//         // Realizar cualquier otra acción después de la subida exitosa
//       } else {
//         console.error("Error al subir el archivo 1");
//         // Realizar acciones en caso de error
//       }
//     } catch (error) {
//       console.error("Error en la solicitud de subida de archivo 1", error);
//       // Realizar acciones en caso de error
//     }
//   };

//   const uploadCV = async (event) => {
//     const file = profesor.cv[0];  
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("/assets/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         console.log("Archivo 2 subido exitosamente");
//         // Realizar cualquier otra acción después de la subida exitosa
//       } else {
//         console.error("Error al subir el archivo 2");
//         // Realizar acciones en caso de error
//       }
//     } catch (error) {
//       console.error("Error en la solicitud de subida de archivo 2", error);
//       // Realizar acciones en caso de error
//     }
//   };
  return {
    profesor,
    profesores,
    // uploadFoto,
    // uploadCV,
    addProfesor
  };
});
