<script lang="ts" setup></script>

<template>
  <div class="header-profile">
    <img
      src="~/assets/images/Avatar.svg"
      alt="Avatar"
      class="header-profile-avatar"
    />

    <div class="header-profile-content">
      <span class="header-profile-name"> Sophia Williams </span>
      <span class="header-profile-welcome"> Bem-vinda de volta 👋🏻 </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-profile {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1 0 0;
}

.header-profile-avatar {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.header-profile-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 0 0;
}

.header-profile-name {
  align-self: stretch;
  color: $color-text-on-neutral-low-strong;
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  line-height: $line-height-base;
  letter-spacing: -0.27px;
}

.header-profile-welcome {
  align-self: stretch;
  color: $color-text-on-neutral-low-default;
  font-size: $font-size-base;
  font-weight: $font-weight-normal;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}
</style>
