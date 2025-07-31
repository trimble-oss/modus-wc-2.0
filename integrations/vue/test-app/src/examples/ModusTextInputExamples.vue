<template>
  <div>
    <h3>Modus Text Input</h3>
    <ModusWcTextInput v-if="isReady"
      aria-label="Text input"
      :bordered="bordered"
      :disabled="disabled"
      :inputMode="inputMode"
      :label="label"
      :readOnly="readOnly"
      :required="required"
      :size="size"
      :type="type"
      :value="value"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcTextInput } from '@trimble-oss/moduswebcomponents-vue';

const isReady = ref(false);
const bordered = ref(true);
const disabled = ref(false);
const inputMode = ref('text');
const label = ref('Label');
const readOnly = ref(false);
const required = ref(false);
const size = ref('md');
const type = ref('text');
const value = ref('');

onMounted(() => {
  isReady.value = true;
});
</script> 