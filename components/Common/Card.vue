<script lang="ts" setup>
interface Props {
  icon: string;
  title: string;
  searchable?: boolean;
  buttonIcon?: string;
  buttonTitle?: string;
  divider?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="card-style">
    <div class="card-header">
      <img :src="icon" />
      <span class="card-header-title"> {{ title }} </span>

      <div v-if="searchable" class="card-header-search">
        <div class="card-header-search-bar">
          <img src="~/assets/icons/search-2-line.svg" />
          <input
            type="text"
            placeholder="Pesquisar..."
            class="card-header-search-input"
          />
        </div>
      </div>

      <button v-if="buttonTitle" class="card-header-button-plain">
        <img v-if="buttonIcon" :src="buttonIcon" />
        <span class="header-button-plain-text"> {{ buttonTitle }} </span>
      </button>
    </div>

    <div v-if="divider" class="card-header-divider" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card-style {
  display: flex;
  height: 100%;
  width: -webkit-fill-available;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid $color-stroke-soft-200;
  background: $color-fill-neutral-low-0;
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
}

.card-header-divider {
  width: 100%;
  height: 1px;
  background: $color-stroke-soft-200;
}

.card-header-title {
  flex: 1 0 0;
  color: $color-text-on-neutral-low-strong;
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  line-height: $line-height-base;
  letter-spacing: -0.176px;
}

.card-header-search {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
}

.card-header-search-bar {
  display: flex;
  padding: 6px 6px 6px 8px;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid $color-stroke-soft-200;
  background: $color-fill-neutral-low-0;
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
}

.card-header-search-input {
  border: none;

  &:focus {
    outline: none;
    border: none;
  }

  &:focus-visible {
    outline: none;
    border: none;
  }

  &::placeholder {
    color: $color-text-on-neutral-low-weak;
    font-size: $font-size-base;
    font-weight: $font-weight-normal;
    line-height: $line-height-sm;
    letter-spacing: -0.084px;
  }
}

.card-header-button-plain {
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
</style>
