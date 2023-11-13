import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfesoresView from "../views/ProfesoresView.vue";
import AsignaturaView from "../views/AsignaturaView.vue";
import LicenciasView from "../views/LicenciasView.vue";
import UsuariosView from "../views/UsuariosView.vue";
import LoginView from "../views/LoginView.vue";

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
      component: ProfesoresView,
      children: [
        {
          path: "/agregarProfesor",
          name: "agregarProfesor",
          component: () => import("../components/profesor/AgregarProfesor.vue"),        
        },
    
      ]
    },
    {
      path: "/asistencias",
      name: "asistencias",
      component: () => import("../views/AsistenciasView.vue"),
    },
    {
      path: "/asignaturas",
      name: "asignaturas",
      component: AsignaturaView,
    },
    {
      path: "/licencias",
      name: "licencias",
      component: LicenciasView,
    },
    {
      path: "/usuarios",
      name: "usuarios",
      component: UsuariosView,
    },
    {
      path: "/login",
      name: "login",     
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

export default router;
