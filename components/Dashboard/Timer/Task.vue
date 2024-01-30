<script lang="ts" setup>
interface Props {
  iconPath: string;
  title: string;
  time: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="previous-tasks-item">
    <div class="previous-tasks-details">
      <div class="previous-tasks-item-icon">
        <img :src="props.iconPath" width="24" height="24" />
      </div>
      <div class="previous-tasks-item-description">
        <span class="previous-tasks-title">{{ props.title }}</span>
        <span class="previous-tasks-time">{{ props.time }}</span>
      </div>
    </div>
    <button class="previous-tasks-item-button">
      <img src="~/assets/images/more-2-line.svg" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.previous-tasks-item {
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
}

.previous-tasks-details {
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}

.previous-tasks-item-icon {
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 48px;
  border: 1px solid $color-stroke-soft-200;
  background: $color-fill-neutral-low-0;
}

.previous-tasks-item-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
}

.previous-tasks-title {
  align-self: stretch;
  color: $color-text-on-neutral-low-strong;
  font-size: $font-size-base;
  font-weight: $font-weight-normal;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}

.previous-tasks-time {
  align-self: stretch;
  color: $color-text-on-neutral-low-default;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  line-height: $line-height-xs;
}

.previous-tasks-item-button {
  align-self: stretch;
  padding: 10px;
  border: none;
  background: $color-fill-neutral-low-0;

  &:hover {
    cursor: pointer;
  }
}
</style>
