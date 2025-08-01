<template>
  <div>
    <h3>Modus Tooltip</h3>
    <ModusWcTooltip v-if="isReady"
      :content="content"
      :disabled="disabled"
      :forceOpen="forceOpen"
      :position="position"
    >
      <ModusWcBadge>Hover</ModusWcBadge>
    </ModusWcTooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcTooltip, ModusWcBadge } from '@trimble-oss/moduswebcomponents-vue';

const isReady = ref(false);
const content = ref('This is a tooltip text');
const disabled = ref(false);
const forceOpen = ref(false);
const position = ref('right');

onMounted(() => {
  isReady.value = true;
});
</script> 