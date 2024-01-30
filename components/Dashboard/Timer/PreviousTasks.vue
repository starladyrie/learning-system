<script lang="ts" setup>
import Task from "./Task.vue";
import type { ITask } from "~/interfaces/task";

interface Props {
  tasks: ITask[];
}

const props: Props = defineProps<Props>();
</script>

<template>
  <div class="previous-tasks">
    <span class="previous-tasks-subheading"> Tarefas Anteriores </span>
    <div class="previous-tasks-content">
      <Task
        v-for="task in tasks"
        :key="task.title"
        :title="task.title"
        :time="task.time"
        :iconPath="task.iconPath"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.previous-tasks {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  align-self: stretch;
}

.previous-tasks-subheading {
  display: flex;
  height: 12px;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  color: $color-text-on-neutral-low-weak;
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  line-height: $line-height-xxs;
  letter-spacing: 0.22px;
  text-transform: uppercase;
}

.previous-tasks-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}
</style>
