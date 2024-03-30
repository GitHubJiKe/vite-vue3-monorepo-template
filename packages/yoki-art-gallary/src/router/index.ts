import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/about",
    component: () => import("../pages/ResumePage.vue"),
  },
  {
    path: "/catalog",
    component: () => import("../pages/CatalogPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
