<script lang="ts" setup>
import FavsContent from "./Content/FavsContent.vue";
import MainContent from "./Content/MainContent.vue";
import SupportingContent from "./Content/SupportingContent.vue";
</script>

<template>
  <div class="sidebar-content">
    <MainContent></MainContent>
    <FavsContent></FavsContent>
    <SupportingContent></SupportingContent>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-content {
  display: flex;
  width: 272px;
  padding: 20px 20px 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
  align-self: stretch;
  border-bottom: 1px solid $color-stroke-soft-200;
}
</style>
