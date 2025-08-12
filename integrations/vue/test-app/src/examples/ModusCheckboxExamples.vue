<template>
  <div>
    <h3>Modus Checkbox</h3>
    <ModusWcCheckbox
      aria-label="Checkbox"
      :disabled="false"
      :indeterminate="false"
      label="Label"
      :required="false"
      size="md"
      :value="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ModusWcCheckbox } from '@trimble-oss/moduswebcomponents-vue';
</script> 