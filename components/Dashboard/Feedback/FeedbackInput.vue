<script lang="ts" setup>
const defineFeedback = ref("");

const setFeedback = (value: string) => {
  defineFeedback.value = value;
};
</script>

<template>
  <div class="feedback-input">
    <div class="input-container">
      <div class="rating-bar">
        <label
          :class="{
            'radio-button': true,
            selected: defineFeedback === 'super-negative',
          }"
        >
          <input
            type="radio"
            name="feedback"
            value="super-negative"
            @click="setFeedback('super-negative')"
          />
          😔
        </label>

        <label
          :class="{
            'radio-button': true,
            selected: defineFeedback === 'negative',
          }"
        >
          <input
            type="radio"
            name="feedback"
            value="negative"
            @click="setFeedback('negative')"
          />
          😕
        </label>

        <label
          :class="{
            'radio-button': true,
            selected: defineFeedback === 'neutral',
          }"
        >
          <input
            type="radio"
            name="feedback"
            value="neutral"
            @click="setFeedback('neutral')"
          />
          😐
        </label>

        <label
          :class="{
            'radio-button': true,
            selected: defineFeedback === 'positive',
          }"
        >
          <input
            type="radio"
            name="feedback"
            value="positive"
            @click="setFeedback('positive')"
          />
          🙂
        </label>

        <label
          :class="{
            'radio-button': true,
            selected: defineFeedback === 'super-positive',
          }"
        >
          <input
            type="radio"
            name="feedback"
            value="super-positive"
            @click="setFeedback('super-positive')"
          />
          😄
        </label>
      </div>

      <textarea
        placeholder="Adicionar comentário..."
        class="input-textarea"
      ></textarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feedback-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid $color-stroke-soft-200;
  background: $color-fill-neutral-low-0;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
}

.rating-bar {
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-bottom: 1px solid $color-stroke-soft-200;
}

.radio-button {
  display: flex;
  padding: 8px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  cursor: pointer;
  border-right: 1px solid $color-stroke-soft-200;
  background: $color-fill-neutral-low-0;

  &:hover {
    background-color: $color-fill-neutral-low-1;
  }

  &.selected {
    background-color: $color-fill-neutral-low-1;
    box-shadow: 0px 2px 4px 0px rgba(27, 28, 29, 0.02),
      0px 6px 10px 0px rgba(27, 28, 29, 0.06);
    stroke: none;
  }

  input {
    appearance: none;
  }
}

.radio-button:last-child {
  border-right: none;
}

.input-textarea {
  padding: 12px;
  width: 100%;
  min-height: 60px;
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
</style>
