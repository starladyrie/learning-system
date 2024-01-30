<script lang="ts" setup>
import Card from "../Common/Card.vue";
import SpotlightContent from "./Spotlight/SpotlightContent.vue";
</script>

<template>
  <div class="spotlight">
    <Card
      icon="/DashIcons/star-smile-line.svg"
      title="Destaque colaboradores"
      buttonIcon="/DashIcons/share-forward-line.svg"
      buttonTitle="Enviar"
    >
      <SpotlightContent></SpotlightContent>
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
  width: max-content;
}
</style>
