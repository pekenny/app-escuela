import { ref, reactive, onMounted} from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
  const login = ref(false);
  const user = reactive({
    username: "",
    password: "",
  });
 

  const router = useRouter();

  const validationLogin = () => {
    if (user.username === "admin" && user.password === "admin") {
      login.value = true;
      //    redirigir a home con router

      router.push({ name: "home" });
    } else {
      login.value = false;
    }
  };

 
  return {
    login,
    user,
    validationLogin
    
  };
});
