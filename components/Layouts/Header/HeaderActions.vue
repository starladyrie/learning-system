<script lang="ts" setup></script>

<template>
  <div class="header-actions">
    <button class="header-button-icon">
      <img src="~/assets/icons/search-2-line.svg" />
    </button>
    <button class="header-button-icon">
      <img src="~/assets/icons/notification-3-line.svg" />
    </button>
    <button class="header-button-plain">
      <img src="~/assets/icons/calendar-check-line.svg" />
      <span class="header-button-plain-text">Calendário</span>
    </button>
    <button class="header-button-default">
      <img src="~/assets/icons/add-line.svg" />
      <span class="header-button-default-text">Nova Solicitação</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.header-actions {
  display: flex;
  gap: 10px;
}

.header-button-icon {
  align-self: stretch;
  padding: 10px;
  border: none;
  background: $color-fill-neutral-low-0;

  &:hover {
    cursor: pointer;
  }
}

.header-button-plain {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  border: 1px solid $color-stroke-soft-200;
  background: $color-fill-neutral-low-0;
  box-shadow: 0px 1px 2px 0px rgba(82, 88, 102, 0.06);

  &:hover {
    cursor: pointer;
  }
}

.header-button-plain-text {
  color: $color-text-on-neutral-low-default;
  text-align: center;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}

.header-button-default {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  border: none;
  background: $color-fill-accent-base;
  box-shadow: 0px 1px 2px 0px rgba(55, 93, 251, 0.08);

  &:hover {
    cursor: pointer;
  }
}

.header-button-default-text {
  color: $color-fill-neutral-low-0;
  text-align: center;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}
</style>
