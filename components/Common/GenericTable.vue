<script lang="ts" setup></script>

<template>
  <div>
    <thead class="table-header-row">
      <slot name="header"></slot>
    </thead>
    <tbody>
      <slot name="body"></slot>
    </tbody>
  </div>
</template>

<style lang="scss" scoped>
tbody {
  background-color: $color-fill-neutral-low-0;
}

tbody > tr > td:last-of-type {
  text-align: center;
}

thead {
  border-radius: 8px;
  background: $color-fill-neutral-low-1;
}

.table-header-row {
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  padding: 8px 12px;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 8px;
  background: $color-fill-neutral-low-1;
}
</style>
