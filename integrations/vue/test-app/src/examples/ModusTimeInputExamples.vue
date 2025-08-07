<template>
  <div>
    <h3>Modus Time Input</h3>
    <ModusWcTimeInput v-if="isReady"
      aria-label="Time input"
      :bordered="bordered"
      :disabled="disabled"
      :label="label"
      :readOnly="readOnly"
      :required="required"
      :showSeconds="showSeconds"
      :size="size"
      :value="value"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcTimeInput } from '@trimble-oss/moduswebcomponents-vue';

const isReady = ref(false);
const bordered = ref(true);
const disabled = ref(false);
const label = ref('Label');
const readOnly = ref(false);
const required = ref(false);
const showSeconds = ref(false);
const size = ref('md');
const value = ref('');

onMounted(() => {
  isReady.value = true;
});
</script> 