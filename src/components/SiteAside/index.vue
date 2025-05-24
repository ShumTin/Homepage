<template>
  <div class="site-aside-container">
    <Avatar :url="avatarUrl" />
    <h1 class="title">ShumTin</h1>
    <Menu />
    <Contact />
    <p class="footer">备案号XXXX</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import avatarUrl from "@/assets/avatar.jpg";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  data() {
    return {
      avatarUrl,
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.contact-container {
  margin-top: 50px;
}
.footer {
  text-align: center;
  font-size: 12px;
  color: @lightWords;
  margin-top: 100px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
