<script lang="ts" setup>
interface Props {
  icon: string;
  title: string;
  shortcut?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="sidebar-item">
    <img :src="icon" />
    <span class="sidebar-item-title"> {{ title }} </span>
    <div v-if="shortcut" class="sidebar-item-shortcut">
      <div class="sidebar-item-shortcut-content">
        <span class="sidebar-item-shortcut-title"> ⌘ {{ shortcut }} </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-item {
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  &:hover {
    background: $color-fill-neutral-low-1;
    border-radius: 8px;
    cursor: pointer;
  }
}

.sidebar-item img {
  width: 24px;
  height: 24px;
}

.sidebar-item-title {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;
  color: $color-text-on-neutral-low-default;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}

.sidebar-item-shortcut {
  align-self: flex-end;
}

.sidebar-item-shortcut-content {
  display: flex;
  padding: 0px 6px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid $color-stroke-soft-200;
}

.sidebar-item-shortcut-title {
  color: $color-text-on-neutral-low-weak;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}
</style>
