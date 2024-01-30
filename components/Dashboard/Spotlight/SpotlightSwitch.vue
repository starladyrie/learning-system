<script lang="ts" setup>
import { useSpotlightStore } from "@/stores/spotlight";

const spotlightStore = useSpotlightStore();

spotlightStore.defineSpotlight = "general";

const setSpotlight = (value: string) => {
  spotlightStore.defineSpotlight = value;
};
</script>

<template>
  <div class="spotlight-switch-content">
    <div class="spotlight-switch">
      <label
        :class="{
          'switch-toggler': true,
          selected: spotlightStore.defineSpotlight === 'general',
        }"
      >
        <input
          type="radio"
          name="Geral"
          value="general"
          @click="setSpotlight('general')"
        />
        Geral
      </label>

      <label
        :class="{
          'switch-toggler': true,
          selected: spotlightStore.defineSpotlight === 'comments',
        }"
      >
        <input
          type="radio"
          name="Comentários"
          value="comments"
          @click="setSpotlight('comments')"
        />
        Comentários
      </label>

      <label
        :class="{
          'switch-toggler': true,
          selected: spotlightStore.defineSpotlight === 'prizes',
        }"
      >
        <input
          type="radio"
          name="Prêmios"
          value="prizes"
          @click="setSpotlight('prizes')"
        />
        Prêmios
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spotlight-switch-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
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
  cursor: pointer;
  background: $color-fill-neutral-low-1;

  &:hover {
    background-color: $color-fill-neutral-low-0;
  }

  &.selected {
    background-color: $color-fill-neutral-low-0;
    box-shadow: 0px 2px 4px 0px rgba(27, 28, 29, 0.02),
      0px 6px 10px 0px rgba(27, 28, 29, 0.06);
    stroke: none;
  }

  input {
    appearance: none;
  }
}
</style>
