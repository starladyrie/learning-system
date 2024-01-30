<script lang="ts" setup></script>

<template>
  <div class="working-bar-subtitles">
    <div class="working-bar-label">
      <div class="working-bar-dot working-bar-dot-rest"></div>
      <span class="working-bar-label-title"> Descanso </span>
    </div>

    <div class="working-bar-label">
      <div class="working-bar-dot working-bar-dot-active"></div>
      <span class="working-bar-label-title"> Ativo </span>
    </div>

    <div class="working-bar-label">
      <div class="working-bar-dot working-bar-dot-extra"></div>
      <span class="working-bar-label-title"> Hora Extra </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.working-bar-subtitles {
  display: flex;
  align-items: center;
  gap: 16px;
}

.working-bar-label {
  display: flex;
  align-items: center;
  gap: 4px;
}

.working-bar-dot {
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.working-bar-dot-rest {
  background: $color-fill-state-away;
}

.working-bar-dot-active {
  background: $color-fill-state-active;
}

.working-bar-dot-extra {
  background: $color-fill-state-extra;
}

.working-bar-label-title {
  color: $color-text-on-neutral-low-default;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  line-height: $line-height-xs;
}
</style>
