import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";

import Pager from "./components/Pager/preview.vue";
import Icon from "./components/Icon/preview.vue";
import Avatar from "./components/Avatar/preview.vue";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
