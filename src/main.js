import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";

import "./mock";
import "./api/banner";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
