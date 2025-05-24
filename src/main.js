import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";

import Pager from "./components/Pager/preview.vue";
import Icon from "./components/Icon/preview.vue";
import Avatar from "./components/Avatar/preview.vue";
import Empty from "./components/Empty/preview.vue";
import Contact from "./components/SiteAside/Contact/preview.vue";
import Menu from "./components/SiteAside/Menu/preview.vue";
import ImageLoader from "./components/ImageLoader/preview.vue";
import SiteAside from "./components/SiteAside/preview.vue";

new Vue({
  render: (h) => h(SiteAside),
}).$mount("#app");
