<template>
  <Layout>
    <template #main>
      <BlogList />
    </template>
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";

export default {
  components: {
    Layout,
    BlogCategory,
    BlogList,
  },
};
</script>

<style></style>
