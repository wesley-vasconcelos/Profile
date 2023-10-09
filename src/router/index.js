import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sobre-mim",
    name: "sobre-mim",
    component: function () {
      return import("../views/AboutView.vue");
    },
  },
  {
    path: "/experiencia",
    name: "experiencia",
    component: function () {
      return import("../views/AboutView.vue");
    },
  },
  {
    path: "/habilidade",
    name: "habilidade",
    component: function () {
      return import("../views/AboutView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
