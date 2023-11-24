import { ref, reactive, watch} from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const login = ref(false);
  const user = reactive({
    username: "",
    password: "",
  });

 
  const router = useRouter();

  // enviar datos por post
  const loginData = async () => {
    try {
      const request = await axios.post(
        "http://localhost:3000/api/login",
        user
      );
      console.log(request.data);
      if (request.data.message === true) {
        login.value = true;
        localStorage.setItem("data", JSON.stringify(request.data));
        router.push({ name: "home" });
      }
    } catch (error) {
      console.error(error);
      login.value = false;
    }
  }

  // const validationLogin = () => {
  //   if (user.username === "admin" && user.password === "admin") {

  //     // crear data en local storage    
  //     localStorage.setItem("data", JSON.stringify(login));      
  //     //    redirigir a home con router
  //     router.push({ name: "home" });
  //   } else {
  //     login.value = false;
  //   }
  // };

  // cerrar sesion
  const logout = () => {
    login.value = false;
    localStorage.removeItem("data");
    router.push({ name: "login" });
  }

  // evaluar en watch si hay data
 watch(() => {
   if (localStorage.getItem("data")) {
     login.value = true;
   }
 }, [login]);
 
  return {
    login,
    user,
    loginData,
    // validationLogin,
    logout
    
  };
});
