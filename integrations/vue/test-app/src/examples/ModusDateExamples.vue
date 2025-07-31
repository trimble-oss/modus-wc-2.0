<template>
  <div>
    <h3>Modus Date</h3>
    <ModusWcDate
      aria-label="Date input"
      :bordered="true"
      :disabled="false"
      label="Label"
      :readOnly="false"
      :required="false"
      size="md"
      value=""
    />
  </div>
</template>

<script setup lang="ts">
import { ModusWcDate } from '@trimble-oss/moduswebcomponents-vue';
</script> 