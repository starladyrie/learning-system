<script lang="ts" setup>
interface Props {
  percentage: number;
  size: number;
  strokeWidth: number;
  color: string;
  textColor: string;
  fontSize: string;
}

const props = defineProps<Props>();

const radius = computed(() => (props.size - props.strokeWidth) / 2);

const strokeDasharray = computed(() => {
  const circumference = 2 * Math.PI * radius.value;
  const strokeLength = (props.percentage / 100) * circumference;
  return `${strokeLength} ${circumference}`;
});
</script>

<template>
  <div>
    <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg">
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        :stroke-width="strokeWidth"
        stroke="#E2E4E9"
        fill="transparent"
      />
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        :stroke="color"
        :stroke-width="strokeWidth"
        :stroke-dasharray="strokeDasharray"
        fill="transparent"
      />
      <text
        :x="size / 2"
        :y="size / 2"
        :font-size="fontSize"
        :fill="textColor"
        alignment-baseline="middle"
        text-anchor="middle"
      >
        {{ percentage }}%
      </text>
    </svg>
  </div>
</template>

<style lang="scss" scoped></style>
