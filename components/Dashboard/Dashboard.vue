<script lang="ts" setup>
import TimeTracker from "./TimeTracker.vue";
import WorkingHours from "./WorkingHours.vue";
import CoursesProgress from "./CoursesProgress.vue";
import Spotlight from "./Spotlight.vue";
import Feedback from "./Feedback.vue";
import CoursesTable from "./CoursesTable.vue";
</script>

<template>
  <div class="dashboard-style">
    <TimeTracker style="grid-area: 1/1/3/2"></TimeTracker>
    <WorkingHours style="grid-area: 1/2/2/3"></WorkingHours>
    <CoursesProgress style="grid-area: 2/2/3/3"></CoursesProgress>
    <Spotlight style="grid-area: 1/3/3/4"></Spotlight>
    <CoursesTable style="grid-area: 3/1/5/3"></CoursesTable>
    <Feedback style="grid-area: 3/3/5/4"></Feedback>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-style {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-gap: 12px;
}
</style>
