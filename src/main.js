import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import { showMessage } from "./utils";
Vue.prototype.$showMessage = showMessage;

import "./mock";
import "./api/banner";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
