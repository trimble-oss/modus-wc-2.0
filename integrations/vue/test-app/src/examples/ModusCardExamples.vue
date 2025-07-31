<template>
  <div>
    <h3>Modus Card</h3>
    <ModusWcCard v-if="isReady"
      aria-label="Sample card"
      :backgroundFigure="backgroundFigure"
      :bordered="bordered"
      :layout="layout"
      :padding="padding"
      style="width: 400px"
    >
      <span slot="title">Card Title</span>
      <span slot="subtitle">Card Subtitle</span>
      <p>This is a sample card content. You can place any content here.</p>
      <div slot="actions" class="modus-wc-justify-end">
        <ModusWcButton aria-label="Click me">Click me</ModusWcButton>
      </div>
    </ModusWcCard>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcCard, ModusWcButton } from '@trimble-oss/moduswebcomponents-vue';

const isReady = ref(false);
const backgroundFigure = ref(false);
const bordered = ref(false);
const layout = ref('vertical');
const padding = ref('normal');

onMounted(() => {
  isReady.value = true;
});
</script> 