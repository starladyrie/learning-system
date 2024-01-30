<script lang="ts" setup></script>

<template>
  <div class="feedback-content">
    <img
      src="/DashIcons/user-smile-line.svg"
      alt="Feedback"
      class="feedback-icon"
    />
    <div class="feedback-text">
      <span class="feedback-title">
        Como você classificaria seu humor hoje?
      </span>
      <span class="feedback-caption">
        Compartilhe seu humor para nos ajudar a entender.
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feedback-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  align-self: stretch;
}

.feedback-icon {
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 56px;
  background: $color-fill-accent-weak;
}

.feedback-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  align-self: stretch;
}

.feedback-title {
  color: $color-text-on-neutral-low-strong;
  text-align: center;
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  line-height: $line-height-base;
  letter-spacing: -0.176px;
}

.feedback-caption {
  color: $color-text-on-neutral-low-default;
  text-align: center;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  line-height: $line-height-xs;
}
</style>
