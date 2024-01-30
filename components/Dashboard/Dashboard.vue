<script lang="ts" setup>
import TimeTracker from "./TimeTracker.vue";
import WorkingHours from "./WorkingHours.vue";
import CoursesProgress from "./CoursesProgress.vue";
import Spotlight from "./Spotlight.vue";
</script>

<template>
  <div class="dashboard-style">
    <TimeTracker></TimeTracker>
    <div class="info-container">
      <WorkingHours></WorkingHours>
      <CoursesProgress></CoursesProgress>
    </div>
    <Spotlight></Spotlight>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-style {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.info-container {
  display: flex;
  flex-direction: column;
}
</style>
