<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #main>主区域</template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
export default {
  components: { Layout, SiteAside },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill();
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
