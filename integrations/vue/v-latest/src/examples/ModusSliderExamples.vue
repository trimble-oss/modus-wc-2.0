<template>
  <div>
    <h3>Modus Slider</h3>
    <modus-wc-slider
      aria-label="Slider"
      :disabled="false"
      label="Label"
      :max="100"
      :min="0"
      :required="false"
      size="md"
      :step="1"
      :value="50"
    ></modus-wc-slider>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for default slider example
</script> 