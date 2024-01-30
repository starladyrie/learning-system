<script lang="ts" setup>
interface Props {
  title: string;
  subtitle: string;
  image: string;
  caption: string;
}

defineProps<Props>();
</script>

<template>
  <div class="spotlight-content">
    <div class="spotlight-head">
      <span class="spotlight-head-title"> {{ title }} </span>
      <span class="spotlight-head-subtitle"> {{ subtitle }} </span>
    </div>

    <img :src="image" height="148px" />

    <span class="spotlight-head-subtitle spotlight-head-caption">
      {{ caption }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.spotlight-content {
  display: flex;
  flex-direction: column;
  // align-items: flex-end;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
}

.spotlight-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  align-self: stretch;
}

.spotlight-head-title {
  color: $color-text-on-neutral-low-strong;
  text-align: center;
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  line-height: $line-height-base;
  letter-spacing: -0.27px;
}

.spotlight-head-subtitle {
  color: $color-text-on-neutral-low-default;
  text-align: center;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  line-height: $line-height-xs;
}

.spotlight-head-caption {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  align-self: stretch;
}
</style>
