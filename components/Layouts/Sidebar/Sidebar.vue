<script lang="ts" setup>
import SidebarContent from "./SidebarContent.vue";
import SidebarFooter from "./SidebarFooter.vue";
import SidebarHeader from "./SidebarHeader.vue";
</script>

<template>
  <div class="sidebar">
    <SidebarHeader></SidebarHeader>
    <SidebarContent></SidebarContent>
    <SidebarFooter></SidebarFooter>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  width: max-content;
}
</style>
