<template>
  <div>
    <h3>Modus Divider</h3>
    <div class="divider-container">
    <ModusWcDivider
      aria-label="Divider"
      color="tertiary"
      content=""
      orientation="vertical"
      position="center"
      :responsive="true"
    />
  </div>
  </div>
</template>

<script setup lang="ts">
import { ModusWcDivider } from '@trimble-oss/moduswebcomponents-vue';
</script> 
<style>
.divider-container {
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #e0e0e0;
  margin: 10px;
}
</style>