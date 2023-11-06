import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
});

export default router;
