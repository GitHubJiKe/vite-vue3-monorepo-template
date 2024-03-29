import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/HomwPage.vue"),
  },
  { path: "/about", component: () => import("../pages/AboutPage.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
