<template>
  <div class="menu-container">
    <a
      v-for="item in items"
      :key="item.link"
      :href="item.link"
      :class="{
        selected: isSelected(item),
      }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "/",
          title: "首页",
          icon: "home",
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          startWith: true, // 只要当前路径以link开头，当前菜单就是选中
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
        },
        {
          link: "/project",
          title: "项目&效果",
          icon: "code",
        },
        {
          link: "/message",
          title: "留言板",
          icon: "chat",
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      const path = item.link.toLowerCase();
      const curPathName = location.pathname.toLowerCase();
      if (item.startWith) return curPathName.startsWith(path);
      else return curPathName === path;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    display: flex;
    align-items: center;
    height: 45px;
    line-height: 45px;
    padding-left: 50px;
    &:hover {
      color: #fff;
    }
    &.selected {
      background: darken(@words, 3%);
    }
  }
  .icon {
    margin-right: 10px;
  }
}
</style>
