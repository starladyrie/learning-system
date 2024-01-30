<script lang="ts" setup>
const emit = defineEmits(["finish"]);

const isRunning = ref(false);
const seconds = ref(0);
const trackerText = computed(() => {
  return isRunning.value ? "Em Andamento" : "Aguardando";
});

const formatTime = computed(() => {
  const hours = Math.floor(seconds.value / 3600);
  const minutes = Math.floor((seconds.value % 3600) / 60);
  const secondsValue = seconds.value % 60;

  return {
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(secondsValue),
  };
});

let timer: NodeJS.Timeout;

const pad = (value: number) => value.toString().padStart(2, "0");

const start = () => {
  isRunning.value = true;
  timer = setInterval(() => {
    seconds.value++;
  }, 1000);
};

const pause = () => {
  isRunning.value = false;
  clearInterval(timer);
};

const reset = () => {
  pause();
  const time = formatTime.value;
  emit("finish", {
    title: `Task ${seconds.value}`,
    time: `${time.hours}:${time.minutes}:${time.seconds}`,
    iconPath: "Images/Jurisoft-Icon.svg",
  });
  seconds.value = 0;
};

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="timer-card">
    <div class="timer-dropdown">
      <img src="~/assets/images/Monday.svg" />
      <span class="timer-dropdown-title">Track App</span>
    </div>

    <div class="timer-content">
      <span class="timer-content-title">{{ trackerText }}</span>
      <div class="timer-cronometer">
        <span class="timer-cronometer-hours">{{ formatTime["hours"] }}:</span>
        <span class="timer-cronometer-minutes">
          {{ formatTime["minutes"] }}:
        </span>
        <span class="timer-cronometer-seconds">
          {{ formatTime["seconds"] }}
        </span>
      </div>

      <div class="timer-actions">
        <button v-if="!isRunning" class="timer-action-button" @click="start">
          <img src="~/assets/icons/play-fill.svg" />
          <span class="timer-action-label">Iniciar</span>
        </button>

        <div v-else class="timer-secondary-actions">
          <button class="timer-action-button" @click="pause">
            <img src="~/assets/icons/pause-circle-fill.svg" />
            <span class="timer-action-label-pause">Pausar</span>
          </button>
          <div class="timer-secondary-actions-divider"></div>
          <button class="timer-action-button" @click="reset">
            <img src="~/assets/icons/stop-circle-fill.svg" />
            <span class="timer-action-label-stop">Parar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timer-card {
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid $color-stroke-soft-200;
  background: $color-fill-neutral-low-0;
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
}

.timer-dropdown {
  display: flex;
  padding: 6px 10px 6px 12px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
}

.timer-dropdown-title {
  color: $color-text-on-neutral-low-default;
  font-size: $font-size-base;
  font-weight: $font-weight-normal;
  line-height: $line-height-sm;
  letter-spacing: -0.084px;
}

.timer-content {
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
}

.timer-content-title {
  align-self: stretch;
  color: $color-text-on-neutral-low-weak;
  text-align: center;
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  line-height: $line-height-xxs;
  letter-spacing: 0.22px;
  text-transform: uppercase;
}

.timer-cronometer {
  text-align: center;
}

.timer-cronometer-hours {
  color: $color-text-on-neutral-low-strong;
  font-size: $font-size-big;
  font-weight: $font-weight-semibold;
  line-height: $line-height-lg;
  letter-spacing: -0.4px;
}

.timer-cronometer-minutes {
  color: $color-text-on-neutral-low-strong;
  font-size: $font-size-big;
  font-weight: $font-weight-semibold;
  line-height: $line-height-lg;
  letter-spacing: -0.4px;
}

.timer-cronometer-seconds {
  color: $color-text-on-neutral-low-weak;
  font-size: $font-size-big;
  font-weight: $font-weight-semibold;
  line-height: $line-height-lg;
  letter-spacing: -0.4px;
}

.timer-actions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
}

.timer-secondary-actions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
}

.timer-secondary-actions-divider {
  width: 1px;
  height: 12px;
  background: $color-stroke-soft-200;
}

.timer-action-button {
  align-self: stretch;
  display: flex;
  align-items: center;
  border: none;
  background: $color-fill-neutral-low-0;
  gap: 4px;

  &:hover {
    cursor: pointer;
  }
}

.timer-action-label {
  color: $color-fill-accent-base;
  text-align: right;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  line-height: $line-height-xs;
}

.timer-action-label-pause {
  color: $color-text-on-neutral-low-strong;
  text-align: right;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  line-height: $line-height-xs;
}

.timer-action-label-stop {
  color: $color-fill-accent-dark;
  text-align: right;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  line-height: $line-height-xs;
}
</style>
