import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Global Guards – Can thiệp toàn bộ Router
// beforeEach: sẽ được gọi tới khi mà bất kì router nào của các bạn được người dùng kích hoạt
router.beforeEach((to, from, next) => {
  console.log("Global guard");
  next();
});

createApp(App).use(router).mount("#app");
