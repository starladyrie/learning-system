<script lang="ts" setup>
import Dashboard from "../components/Dashboard/Dashboard.vue";
</script>

<template>
  <div id="dashboard-page">
    <div class="content">
      <Dashboard></Dashboard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
