<template>
  <div id="app">
    <h1>App组件</h1>
    <Pager :total="800" :current="current" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Pager from "./components/Pager.vue";
export default {
  data() {
    return {
      current: 5,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>
