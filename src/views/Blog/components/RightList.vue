<template>
  <ul class="right-list-container">
    <li @click="handleSelect(item)" v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelected }">
        {{ item.name }}
      </span>
      <span class="aside" :class="{ active: item.isSelected }">
        {{ item.aside }}
      </span>
      <RightList :list="item.children" @select="handleSelect" />
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
    handleSelect(item) {
      if (!item.isSelected) {
        this.$emit("select", item);
      }
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
    font-size: 14px;
    .active {
      color: @warn;
    }
  }
  .right-list-container {
    margin-left: 1em;
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>
