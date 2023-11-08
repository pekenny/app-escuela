import { reactive, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useProfesoresStore = defineStore("profesores", () => {
  const profesores = reactive([]);
  const profesor = reactive({
    nombreyapellido: "",
    dni: "",
    domicilio: "",
    telefono: "",
    email: "",
    foto: {},
    cv: {},
    asignatura: "",
    fechadeingreso: "",
    fechadebaja: "",
  });

  onMounted(async () => {
    const request = await fetch(
      "http://localhost/abm-scool/public/profesores/profesores"
    );
    const data = await request.json();
    profesores.push(...data);
  });

  const addProfesor = async () => {
    // peticion post con axios a API
    const request = await axios.post(
      "http://localhost/abm-scool/public/profesores/profesores",
      profesor,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "json",
        withCredentials: false,
      }
    );

    const response = request.data;
    profesores.push(response);
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
    addProfesor,
  };
});
