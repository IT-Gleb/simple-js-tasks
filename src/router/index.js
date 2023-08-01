import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/components/html/MainLayout.vue"),
  },
  {
    path: "/task1",
    name: "task1",
    component: () => import("@/components/html/Task1.vue"),
  },
  {
    path: "/task2",
    name: "task2",
    component: () => import("@/components/html/Task2.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ ""),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
