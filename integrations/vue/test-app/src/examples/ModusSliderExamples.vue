<template>
  <div>
    <h3>Modus Slider</h3>
    <ModusWcSlider
      aria-label="Slider"
      :disabled="false"
      label="Label"
      :max="100"
      :min="0"
      :required="false"
      size="md"
      :step="1"
      :value="50"
    />
  </div>
</template>

<script setup lang="ts">
import { ModusWcSlider } from '@trimble-oss/moduswebcomponents-vue';
</script> 