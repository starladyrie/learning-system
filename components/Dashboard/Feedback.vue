<script lang="ts" setup>
import Card from "../Common/Card.vue";
import FeedbackContent from "./Feedback/FeedbackContent.vue";
import FeedbackInput from "./Feedback/FeedbackInput.vue";
</script>

<template>
  <div class="feedback">
    <Card icon="/DashIcons/discuss-line.svg" title="Feedback diário">
      <FeedbackContent></FeedbackContent>
      <FeedbackInput></FeedbackInput>
      <button class="feedback-button">
        <span class="feedback-button-label"> Enviar </span>
      </button>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
}

.feedback-button {
  display: flex;
  padding: 10px;
  width: 100%;
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

.feedback-button-label {
  color: $color-text-on-neutral-low-default;
  text-align: center;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  line-height: $line-height-base;
  letter-spacing: -0.084px;
}
</style>
