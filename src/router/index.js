import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { titleControler } from "@/utils";

if (!window.VueRouter) {
  Vue.use(VueRouter);
}

const router = new VueRouter({
  // 配置
  routes: routes,
  mode: "hash",
});

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleControler.setRouteTitle(to.meta.title);
  }
});

export default router;
