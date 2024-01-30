<script lang="ts" setup>
import Card from "../Common/Card.vue";
import Timer from "../Dashboard/Timer/Timer.vue";
import PreviousTasks from "../Dashboard/Timer/PreviousTasks.vue";

import type { ITask } from "~/interfaces/task";

const tasks = ref<ITask[]>([
  {
    title: "Loom Rebranding",
    time: "00:34:21",
    iconPath: "Images/Loom.svg",
  },
  {
    title: "Evernote App Redesign",
    time: "00:14:15",
    iconPath: "Images/Evernote.svg",
  },
]);

const addTask = (event: ITask) => {
  console.log("Finished", event);
  tasks.value.shift();
  tasks.value.push(event);
};
</script>

<template>
  <div class="time-tracker">
    <Card
      icon="/DashIcons/timer-flash-line.svg"
      title="Rastreador de Tempo"
      buttonIcon="/DashIcons/history-line.svg"
      buttonTitle="Histórico"
    >
      <Timer @finish="addTask" />
      <PreviousTasks :tasks="tasks" />
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.time-tracker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
}
</style>
