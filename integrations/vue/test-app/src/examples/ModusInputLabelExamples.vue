<template>
  <div>
    <h3>Modus Input Label</h3>
    <ModusWcInputLabel v-if="isLoaded"
      label-text="Label"
      :required="false"
      size="md"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcInputLabel } from '@trimble-oss/moduswebcomponents-vue';

const isLoaded = ref(false);

onMounted(() => {
  isLoaded.value = true;
});
</script> 