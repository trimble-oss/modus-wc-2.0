<template>
  <div>
    <h3>Modus Radio</h3>
    <ModusWcRadio
      aria-label="Radio"
      :disabled="false"
      label="Label"
      :required="false"
      size="md"
      :value="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ModusWcRadio } from '@trimble-oss/moduswebcomponents-vue';
</script> 