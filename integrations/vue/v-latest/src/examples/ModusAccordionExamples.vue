<template>
  <div>
    <h3>Modus Accordion</h3>
    <modus-wc-accordion v-if="isLoaded">
      <modus-wc-collapse :options="collapseOptions[0]">
        <div slot="content">Collapse content</div>
      </modus-wc-collapse>
      <modus-wc-collapse :options="collapseOptions[1]">
        <div slot="content">Collapse content</div>
      </modus-wc-collapse>
      <modus-wc-collapse :options="collapseOptions[2]">
        <div slot="content">Collapse content</div>
      </modus-wc-collapse>
    </modus-wc-accordion>
    <div v-else>Loading accordion options...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { ICollapseOptions } from '@trimble-oss/moduswebcomponents';

const isLoaded = ref(false);
const collapseOptions = ref<ICollapseOptions[]>([]);

onMounted(async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  collapseOptions.value = [
    {
      description: 'Item one description',
      icon: 'alert',
      iconAriaLabel: 'Alert',
      title: 'Item One',
    },
    {
      description: 'Item two description',
      icon: 'alert',
      iconAriaLabel: 'Alert',
      title: 'Item Two',
    },
    {
      description: 'Item three description',
      icon: 'alert',
      iconAriaLabel: 'Alert',
      title: 'Item Three',
    },
  ];
  
  isLoaded.value = true;
});

</script> 