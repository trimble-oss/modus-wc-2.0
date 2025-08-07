<template>
  <div>
    <h3>Modus Textarea</h3>
    <ModusWcTextarea
      aria-label="Textarea input"
      :bordered="true"
      :disabled="false"
      label="Label"
      :readonly="false"
      :required="false"
      :rows="6"
      size="md"
      value=""
    />
  </div>
</template>

<script setup lang="ts">
import { ModusWcTextarea } from '@trimble-oss/moduswebcomponents-vue';
</script> 