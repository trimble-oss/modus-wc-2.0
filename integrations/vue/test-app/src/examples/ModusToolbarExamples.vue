<template>
  <div>
    <h3>Modus Toolbar</h3>
    <ModusWcToolbar>
      <div slot="start">Start</div>
      <div slot="center">Center</div>
      <div slot="end">End</div>
    </ModusWcToolbar>
  </div>
</template>

<script setup lang="ts">
import { ModusWcToolbar } from '@trimble-oss/moduswebcomponents-vue';
</script> 