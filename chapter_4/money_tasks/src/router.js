import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TransactionPage from "./pages/TransactionPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/transaction",
    component: TransactionPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
