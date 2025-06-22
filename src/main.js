import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";

import "./mock";
import "./api/banner";

// 注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

import * as blogApi from "./api/blog";
// blogApi.getBlog("asdwa").then((r) => console.log(r));

// blogApi
//   .postComment({
//     nickname: "昵称",
//     content: "评论内容，纯文本",
//     blogId: "123",
//   })
//   .then((r) => {
//     console.log(r);
//   });

blogApi.getComments(-1, 1, 5).then((r) => console.log(r));
