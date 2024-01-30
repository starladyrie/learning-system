<script lang="ts" setup>
import SidebarItem from "./SidebarItem.vue";

const menuItems = [
  {
    icon: "/SidebarIcons/settings-2-line.svg",
    title: "Configurações",
  },
  {
    icon: "/SidebarIcons/headphone-line.svg",
    title: "Suporte",
  },
];
</script>

<template>
  <div class="supporting-content">
    <SidebarItem
      v-for="item in menuItems"
      :key="item.title"
      :icon="item.icon"
      :title="item.title"
    ></SidebarItem>
  </div>
</template>

<style lang="scss" scoped>
.supporting-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
}
</style>
