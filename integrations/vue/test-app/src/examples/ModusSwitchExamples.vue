<template>
  <div>
    <h3>Modus Switch</h3>
    <ModusWcSwitch
      aria-label="Toggle"
      :disabled="false"
      :indeterminate="false"
      label="Label"
      :required="false"
      size="md"
      :value="false"
    />
  </div>
</template>

<script setup lang="ts">
import { ModusWcSwitch } from '@trimble-oss/moduswebcomponents-vue';
</script> 