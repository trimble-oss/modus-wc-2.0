<template>
  <div>
    <h3>Modus Stepper</h3>
    <modus-wc-stepper v-if="isLoaded"
      orientation="horizontal"
      :steps="steps"
    ></modus-wc-stepper>
    <div v-else>Loading stepper...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { IStep } from '@trimble-oss/moduswebcomponents';

const isLoaded = ref(false);
const steps = ref<IStep[]>([]);

onMounted(async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  steps.value = [
    { label: 'Step 1', color: 'primary' },
    { label: 'Step 2', color: 'primary' },
    { label: 'Step 3', color: 'warning' },
    { label: 'Step 4', content: '🚀' },
  ];
  
  isLoaded.value = true;
});
</script> 