<script lang="ts" setup></script>

<template>
  <div class="course-progress-details">
    <div class="course-progress-details-text">
      <span class="course-progress-details-title"> Diversidade da equipe </span>
      <span class="course-progress-details-caption">
        Projetado para promover a inclusividade e perspectivas diversas.
      </span>
    </div>

    <button class="course-progress-details-button">
      <span class="course-progress-details-button-label"> Retomar curso </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.course-progress-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
}

.course-progress-details-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.course-progress-details-title {
  color: $color-text-on-neutral-low-strong;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}

.course-progress-details-caption {
  color: $color-text-on-neutral-low-default;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  line-height: $line-height-xs;
}

.course-progress-details-button {
  border: none;
  background: $color-fill-neutral-low-0;

  &:hover {
    cursor: pointer;
  }
}

.course-progress-details-button-label {
  color: $color-fill-accent-base;
  text-align: right;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  line-height: $line-height-xs;
  text-decoration-line: underline;
}
</style>
