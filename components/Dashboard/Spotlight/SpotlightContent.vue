<script lang="ts" setup></script>

<template>
  <div class="spotlight-content">
    <div class="spotlight-switch">
      <div class="switch-toggler">
        <span class="switch-label">Geral</span>
      </div>

      <div class="switch-toggler">
        <span class="switch-label">Comentários</span>
      </div>

      <div class="switch-toggler">
        <span class="switch-label">Prêmios</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spotlight-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
}

.spotlight-switch {
  display: flex;
  padding: 4px;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-radius: 10px;
  background: $color-fill-neutral-low-1;
}

.switch-toggler {
  display: flex;
  padding: 4px 2px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;
  border-radius: 6px;
  background: $color-fill-neutral-low-0;

  &:active {
    box-shadow: 0px 2px 4px 0px rgba(27, 28, 29, 0.02),
      0px 6px 10px 0px rgba(27, 28, 29, 0.06);
  }
}
</style>
