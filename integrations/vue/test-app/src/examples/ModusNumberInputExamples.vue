<template>
  <div>
    <h3>Modus Number Input</h3>
    <ModusWcNumberInput
      aria-label="Number input"
      :bordered="true"
      :disabled="false"
      inputMode="numeric"
      label="Label"
      size="md"
      type="number"
      value=""
    />
  </div>
</template>

<script setup lang="ts">
import { ModusWcNumberInput } from '@trimble-oss/moduswebcomponents-vue';
</script> 