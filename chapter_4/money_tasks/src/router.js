import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TransactionPage from "./pages/TransactionPage.vue";
import TransactionDetail from "./pages/TransactionDetail.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/transaction",
    component: TransactionPage,
  },
  {
    path: "/transaction/:id",
    component: TransactionDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
