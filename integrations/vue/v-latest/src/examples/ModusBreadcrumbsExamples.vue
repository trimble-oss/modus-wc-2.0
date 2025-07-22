<template>
  <div>
    <h3>Modus Breadcrumbs</h3>
    <modus-wc-breadcrumbs
      v-if="isLoaded"
      :items="items"
      size="md"
    ></modus-wc-breadcrumbs>
    <div v-else>Loading breadcrumbs...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { IBreadcrumb } from '@trimble-oss/moduswebcomponents';


const isLoaded = ref(false);
const items = ref<IBreadcrumb[]>([]);

onMounted(async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  items.value = [
    {
      label: 'Root',
      url: '#',
    },
    {
      label: 'Subpage',
      url: '#',
    },
    {
      label: 'Current Page',
      url: '#',
    },
  ];
  
  isLoaded.value = true;
});
</script> 