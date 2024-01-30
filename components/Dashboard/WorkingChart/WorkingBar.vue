<script lang="ts" setup></script>

<template>
  <div class="working-bar">
    <div class="working-bar-graph working-bar-rest"></div>

    <div class="working-bar-graph working-bar-active"></div>

    <div class="working-bar-graph working-bar-extra"></div>
  </div>
</template>

<style lang="scss" scoped>
.working-bar {
  display: flex;
  align-items: center;
  flex: 1 0 0;
  gap: 6px;
  width: 100%;
}

.working-bar-graph {
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 2px;
  height: 10px;
}

.working-bar-rest {
  width: 33.33%;
  background: $color-fill-state-away;
}

.working-bar-active {
  width: 33.33%;
  background: $color-fill-state-active;
}

.working-bar-extra {
  width: 33.33%;
  background: $color-fill-state-extra;
}
</style>
