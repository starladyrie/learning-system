<script lang="ts" setup>
import Card from "../Common/Card.vue";
import CourseProgressDetails from "./CoursesProgressContent/CourseProgressDetails.vue";
import CoursesProgressChart from "./CoursesProgressContent/CoursesProgressChart.vue";
</script>

<template>
  <div class="courses-progress">
    <Card
      icon="/DashIcons/book-3-line.svg"
      title="Cursos - Progresso"
      buttonTitle="Ver todos"
      divider
    >
      <div class="courses-progress-content">
        <CoursesProgressChart
          :percentage="25"
          :size="80"
          :strokeWidth="8"
          color="#FF4A00"
          textColor="#0A0D14"
          fontSize="14px"
        ></CoursesProgressChart>
        <CourseProgressDetails></CourseProgressDetails>
      </div>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.courses-progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  width: inherit;
}

.courses-progress-content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
}
</style>
