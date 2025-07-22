<template>
  <div>
    <h3>Modus Select</h3>
    <modus-wc-select v-if="isLoaded"
      aria-label="Select input"
      :bordered="true"
      :disabled="false"
      label="Label"
      :options="options"
      :required="false"
      size="md"
      value=""
    ></modus-wc-select>
    <div v-else>Loading select options...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { ISelectOption } from '@trimble-oss/moduswebcomponents';

const isLoaded = ref(false);
const options = ref<ISelectOption[]>([
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]);

onMounted(async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  options.value = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];
  
  isLoaded.value = true;
});
</script> 