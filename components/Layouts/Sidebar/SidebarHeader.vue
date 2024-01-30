<script lang="ts" setup></script>

<template>
  <div class="sidebar-header">
    <div class="sidebar-header-content">
      <img
        src="/Images/Jurisoft-Icon.svg"
        alt="Jurisoft Logo"
        class="sidebar-header-content-logo"
      />
      <div class="sidebar-header-content-description">
        <div class="sidebar-header-content-description-company">
          <span class="sidebar-header-content-description-title">
            Jurisoft
          </span>
          <span class="sidebar-header-content-description-subtitle">
            Marketing Jurídico
          </span>
        </div>
        <button class="sidebar-header-content-collapse">
          <img
            src="/SidebarIcons/arrow-down.svg"
            class="sidebar-header-content-collapse-icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-header {
  display: flex;
  width: 272px;
  padding: 12px;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid $color-stroke-soft-200;
  background: $color-fill-neutral-low-0;
}

.sidebar-header-content {
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  border-radius: 10px;
}

.sidebar-header-content-logo img {
  width: 40px;
  height: 40px;
}

.sidebar-header-content-description {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
}

.sidebar-header-content-description-company {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 0 0;
}

.sidebar-header-content-description-title {
  align-self: stretch;
  color: $color-text-on-neutral-low-strong;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}

.sidebar-header-content-description-subtitle {
  align-self: stretch;
  color: $color-text-on-neutral-low-default;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  line-height: $line-height-xs;
}

.sidebar-header-content-collapse {
  align-self: stretch;
  border: none;
  background: $color-fill-neutral-low-0;

  &:hover {
    cursor: pointer;
  }
}

.sidebar-header-content-collapse-icon {
  width: 24px;
  height: 24px;
}
</style>
