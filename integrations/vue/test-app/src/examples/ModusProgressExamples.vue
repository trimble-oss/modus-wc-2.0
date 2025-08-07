<template>
  <div>
    <h3>Modus Progress</h3>
    <ModusWcProgress
      aria-label="Progress bar"
      :indeterminate="false"
      :max="100"
      :value="70"
      variant="default"
    />
  </div>
</template>

<script setup lang="ts">
import { ModusWcProgress } from '@trimble-oss/moduswebcomponents-vue';
</script> 