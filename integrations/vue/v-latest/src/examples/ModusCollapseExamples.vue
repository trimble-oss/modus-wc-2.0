<template>
  <div>
    <h3>Modus Collapse</h3>
    <modus-wc-collapse v-if="isLoaded"
      :bordered="false"
      :expanded="false"
      :options="collapseOption"
    >
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
    <div v-else>Loading collapse options...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { ICollapseOptions } from '@trimble-oss/moduswebcomponents';

const collapseOption = ref<ICollapseOptions>();
const isLoaded = ref(false);

onMounted(async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  collapseOption.value = {
    title: 'Collapse Title',
    description: 'Collapse description',
    icon: 'alert', 
    iconAriaLabel: 'Alert',
  };
  
  isLoaded.value = true;
});
</script> 