import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TransactionPage from "./pages/TransactionPage.vue";
import TransactionDetail from "./pages/TransactionDetail.vue";
import ErrorPage from "./pages/404Page.vue";

const routes = [
  {
    path: "/",
    name: "home-route",
    component: HomePage,
  },
  {
    path: "/transaction",
    name: "transaction-route",
    component: TransactionPage,
  },
  {
    path: "/transaction/:id",
    name: "transaction-detail-route",
    component: TransactionDetail,
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
