import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // component: () => import("../views/HomeView.vue"),
      component: HomeView,
    },
    {
      path: "/profesores",
      name: "profesores",
      component: () => import("../views/ProfesoresView.vue"),
    },
    {
      path: "/asignaturas",
      name: "asignaturas",
      component: () => import("../views/AsignaturaView.vue"),
    },
    {
      path: "/licencias",
      name: "licencias",
      component: () => import("../views/LicenciasView.vue"),
    },
    {
      path: "/usuarios",
      name: "usuarios",
      component: () => import("../views/UsuariosView.vue"),
    },
    {
      path: "/login",
      name: "login",     
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

export default router;
