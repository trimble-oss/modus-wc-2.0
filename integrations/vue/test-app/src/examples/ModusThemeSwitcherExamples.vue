<template>
  <div>
    <h3>Modus Theme Switcher</h3>
    <ModusWcThemeProvider v-if="isReady" :initialTheme="initialTheme">
      <ModusWcThemeSwitcher
        aria-label="Theme toggle"
      />
    </ModusWcThemeProvider>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcThemeProvider, ModusWcThemeSwitcher } from '@trimble-oss/moduswebcomponents-vue';

const isReady = ref(false);
const initialTheme = ref('modus-classic-light');

onMounted(() => {
  isReady.value = true;
});
</script> 