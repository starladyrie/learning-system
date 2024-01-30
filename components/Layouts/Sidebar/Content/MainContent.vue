<script lang="ts" setup>
import SidebarItem from "./SidebarItem.vue";

const menuItems = [
  {
    icon: "/SidebarIcons/layout-grid-line.svg",
    title: "Dashboard",
    active: true,
  },
  {
    icon: "/SidebarIcons/calendar-line.svg",
    title: "Calendário",
    active: false,
  },
  {
    icon: "/SidebarIcons/timer-line.svg",
    title: "Descanso",
    active: false,
  },
  {
    icon: "/SidebarIcons/folders-line.svg",
    title: "Projetos",
    active: false,
  },
  {
    icon: "/SidebarIcons/group-line.svg",
    title: "Times",
    active: false,
  },
  {
    icon: "/SidebarIcons/equalizer-line.svg",
    title: "Integrações",
    active: false,
  },
  {
    icon: "/SidebarIcons/star-smile-line.svg",
    title: "Benefícios",
    active: false,
  },
  {
    icon: "/SidebarIcons/file-cloud-line.svg",
    title: "Documentos",
    active: false,
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
      :active="item.active"
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
