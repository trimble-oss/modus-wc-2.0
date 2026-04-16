<template>
  <div>
    <h3>Modus Chip</h3>
    <ModusWcChip v-if="isReady"
      aria-label="Chip example"
      :label="label"
      :showRemove="showRemove"
      :size="size"
      :variant="variant"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcChip } from '@trimble-oss/moduswebcomponents-vue';

const isReady = ref(false);
const label = ref('Chip');
const showRemove = ref(true);
const size = ref('sm');
const variant = ref('filled');

onMounted(() => {
  isReady.value = true;
});
</script> 