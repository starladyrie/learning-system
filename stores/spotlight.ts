import { ref } from "vue";
import { defineStore } from "pinia";

export const useSpotlightStore = defineStore("spotlight", () => {
  const defineSpotlight = ref<string>("");

  return { defineSpotlight };
});
