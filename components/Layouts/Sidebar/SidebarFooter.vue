<script lang="ts" setup></script>

<template>
  <div class="sidebar-footer">
    <div class="sidebar-footer-content">
      <img src="~/assets/images/Avatar.svg" alt="Avatar" />

      <div class="sidebar-footer-content-profile">
        <div class="sidebar-footer-content-profile-description">
          <div class="sidebar-footer-content-profile-user">
            <span class="sidebar-footer-content-profile-name">
              Sophia Williams
            </span>
            <img src="~/assets/icons/verified-fill.svg" />
          </div>
          <span class="sidebar-footer-content-profile-email">
            sophia@jurisoft.com
          </span>
        </div>
        <button class="sidebar-footer-content-collapse">
          <img
            src="/SidebarIcons/arrow-right-s-line.svg"
            class="sidebar-footer-content-collapse-icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-footer {
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}

.sidebar-footer-content {
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
}

.sidebar-footer-content-profile {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
}

.sidebar-footer-content-profile-description {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 0 0;
}

.sidebar-footer-content-profile-user {
  display: flex;
  align-items: center;
  gap: 4px;
}

.sidebar-footer-content-profile-name {
  align-self: stretch;
  color: $color-text-on-neutral-low-strong;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}

.sidebar-footer-content-profile-email {
  align-self: stretch;
  color: $color-text-on-neutral-low-default;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  line-height: $line-height-xs;
}

.sidebar-footer-content-collapse {
  align-self: stretch;
  border: none;
  background: $color-fill-neutral-low-0;

  &:hover {
    cursor: pointer;
  }
}

.sidebar-footer-content-collapse-icon {
  width: 24px;
  height: 24px;
}
</style>
