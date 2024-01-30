<script lang="ts" setup>
import Card from "../Common/Card.vue";
import SpotlightSwitch from "./Spotlight/SpotlightSwitch.vue";
import SpotlightContent from "./Spotlight/SpotlightContent.vue";
import SpotlightComments from "./Spotlight/SpotlightComments.vue";
import { useSpotlightStore } from "@/stores/spotlight";

const spotlightStore = useSpotlightStore();
</script>

<template>
  <div class="spotlight">
    <Card
      icon="/DashIcons/star-smile-line.svg"
      title="Destaque colaboradores"
      buttonIcon="/DashIcons/share-forward-line.svg"
      buttonTitle="Enviar"
    >
      <SpotlightSwitch></SpotlightSwitch>

      <SpotlightContent
        v-if="spotlightStore.defineSpotlight === 'general'"
        title="Matthew Johnson"
        subtitle="Engenheiro de Software"
        image="/Images/Profile.svg"
        caption="Funcionário de melhor desempenho de Dezembro!"
      ></SpotlightContent>

      <SpotlightComments
        v-if="spotlightStore.defineSpotlight === 'comments'"
      ></SpotlightComments>

      <SpotlightContent
        v-if="spotlightStore.defineSpotlight === 'prizes'"
        title="Cartão presente de R$ 50,00"
        subtitle="Aproveite o prêmio, Matthew!"
        image="/Images/Rewards.svg"
        caption="Os funcionários do mês recebem recompensas"
      ></SpotlightContent>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.spotlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
}
</style>
