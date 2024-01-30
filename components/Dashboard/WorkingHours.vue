<script lang="ts" setup>
import Card from "../Common/Card.vue";
import WorkingBar from "./WorkingChart/WorkingBar.vue";
import WorkingBarSubtitles from "./WorkingChart/WorkingBarSubtitles.vue";
</script>

<template>
  <div class="working-hours">
    <Card
      icon="/DashIcons/timer-line.svg"
      title="Horas diárias de trabalho"
      buttonTitle="Detalhes"
      divider
    >
      <div class="working-hours-total">
        <span class="working-hours-time"> 12 </span>
        <span class="working-hours-text"> horas </span>
        <span class="working-hours-time"> 27 </span>
        <span class="working-hours-text"> minutos no total⏳</span>
      </div>

      <WorkingBar></WorkingBar>
      <WorkingBarSubtitles></WorkingBarSubtitles>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.working-hours {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  width: max-content;
}

.working-hours-total {
  display: flex;
  gap: 4px;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  width: max-content;
}

.working-hours-time {
  color: $color-text-on-neutral-low-strong;
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  line-height: $line-height-base;
  letter-spacing: -0.176px;
}

.working-hours-text {
  color: $color-text-on-neutral-low-default;
  font-size: $font-size-lg;
  font-weight: $font-weight-normal;
  line-height: $line-height-base;
  letter-spacing: -0.176px;
}
</style>
