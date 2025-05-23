<template>
  <div class="test-container">
    <Pager :total="800" :current="current" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Pager from "./";

export default {
  name: "TestPager",
  components: {
    Pager,
  },
  data() {
    return {
      current: 5,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>
