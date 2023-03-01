import { createRouter, createWebHistory } from "vue-router";
import ErrorPage from "./pages/404Page.vue";

const HomePage = () => import("./pages/HomePage.vue");

const routes = [
  {
    path: "/",
    name: "home-route",
    component: HomePage,
  },
  {
    path: "/transaction",
    name: "transaction-route",
    component: () => import("../src/pages/TransactionPage.vue"),
  },
  {
    path: "/transaction/:id",
    name: "transaction-detail-route",
    component: () => import("../src/pages/TransactionDetail.vue"),
    // Per-Route Guard – Can thiệp vào Router được định nghĩa
    // beforEnter: sẽ được gọi tới trước khi router được chuyển hướng
    beforeEnter: (to, from, next) => {
      console.log("Action route guard");
      next();
    },
  },
  {
    path: "/transaction/edit",
    name: "transaction-edit-route",
    component: () => import("../src/pages/TransactionEdit.vue"),
  },
  // Custom reddirect
  {
    path: "/ts",
    redirect: "/transaction",
  },
  // 404 Page
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
