<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelected }">
        {{ item.name }}
      </span>
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [{name:'xxx',isSelected:true, children:[{name:'yyy', isSelected:false}]}]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
    }
  }
  .right-list-container {
    margin-left: 1em;
  }
}
</style>
