<script lang="ts" setup>
import SidebarItem from "./SidebarItem.vue";

const menuItems = [
  {
    icon: "/SidebarIcons/layout-grid-line.svg",
    title: "Dashboard",
  },
  {
    icon: "/SidebarIcons/calendar-line.svg",
    title: "Calendário",
  },
  {
    icon: "/SidebarIcons/timer-line.svg",
    title: "Descanso",
  },
  {
    icon: "/SidebarIcons/folders-line.svg",
    title: "Projetos",
  },
  {
    icon: "/SidebarIcons/group-line.svg",
    title: "Times",
  },
  {
    icon: "/SidebarIcons/equalizer-line.svg",
    title: "Integrações",
  },
  {
    icon: "/SidebarIcons/star-smile-line.svg",
    title: "Benefícios",
  },
  {
    icon: "/SidebarIcons/file-cloud-line.svg",
    title: "Documentos",
  },
];
</script>

<template>
  <div class="sidebar-main-content">
    <div class="sidebar-main-content-header">
      <span class="sidebar-main-content-title">Main</span>
    </div>

    <SidebarItem
      v-for="item in menuItems"
      :key="item.title"
      :icon="item.icon"
      :title="item.title"
    ></SidebarItem>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-main-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
}

.sidebar-main-content-header {
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
}

.sidebar-main-content-title {
  flex: 1 0 0;
  color: $color-text-on-neutral-low-weak;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  line-height: $line-height-xs;
  letter-spacing: 0.48px;
  text-transform: uppercase;
}
</style>
