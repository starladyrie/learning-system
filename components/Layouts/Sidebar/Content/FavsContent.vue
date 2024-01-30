<script lang="ts" setup>
import SidebarItem from "./SidebarItem.vue";

const menuLinks = [
  {
    icon: "/SidebarIcons/dot-purple.svg",
    title: "Loom Mobile App",
    shortcut: "1",
  },
  {
    icon: "/SidebarIcons/dot-red.svg",
    title: "Monday Redesign",
    shortcut: "2",
  },
  {
    icon: "/SidebarIcons/dot-pink.svg",
    title: "Udemy Courses",
    shortcut: "3",
  },
];
</script>

<template>
  <div class="sidebar-favs-content">
    <div class="sidebar-favs-content-header">
      <span class="sidebar-favs-content-title">Favs</span>
    </div>

    <SidebarItem
      v-for="item in menuLinks"
      :key="item.title"
      :icon="item.icon"
      :title="item.title"
      :shortcut="item.shortcut"
    ></SidebarItem>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-favs-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
}

.sidebar-favs-content-header {
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
}

.sidebar-favs-content-title {
  flex: 1 0 0;
  color: $color-text-on-neutral-low-weak;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  line-height: $line-height-xs;
  letter-spacing: 0.48px;
  text-transform: uppercase;
}
</style>
