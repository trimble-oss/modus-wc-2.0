<template>
  <div>
    <h3>Modus Tabs</h3>
    <div class="tabs-container">
    <ModusWcTabs v-if="isLoaded"
      aria-label="Tab group"
      tabStyle="bordered"
      :tabs="tabs"
      size="md"
    />

    <div v-else>Loading tabs...</div>
  </div>
  </div>
</template>
<style>
.tabs-container {
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #e0e0e0;
  margin: 10px;
}
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcTabs } from '@trimble-oss/moduswebcomponents-vue';
import type { ITab } from '@trimble-oss/moduswebcomponents';

const isLoaded = ref(false);
const tabs = ref<ITab[]>([]);

onMounted(async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  tabs.value = [
    { label: 'Dashboard' },
    { label: 'Analytics' },
    { label: 'Reports' },
    { label: 'Settings' },
  ];
  
  isLoaded.value = true;
});
</script> 