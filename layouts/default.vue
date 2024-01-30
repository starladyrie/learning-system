<script lang="ts" setup>
import Sidebar from "~/components/Layouts/Sidebar/Sidebar.vue";
import NavbarHeader from "~/components/Layouts/Header/NavbarHeader.vue";
</script>

<template>
  <div id="app" class="app">
    <Sidebar class="left-sidebar"></Sidebar>
    <div id="main" class="layout-navbar">
      <div id="main-content" class="main-content">
        <NavbarHeader class="nav-header"></NavbarHeader>
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-self: stretch;
  height: 100%;
  background: $color-fill-neutral-low-0;
}

.left-sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  width: min-content;
  height: 100%;
  border-right: 1px solid $color-stroke-soft-200;
  background: $color-fill-neutral-low-0;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: calc(100vw - 300px);
  background: $color-fill-neutral-low-0;
}

.nav-header {
  display: flex;
  width: calc(100vw - 300px);
  padding: 20px 32px;
  align-items: center;
  gap: 12px;
}
</style>
