<template>
  <div>
    <h3>Modus Divider</h3>
    <div class="divider-container">
    <modus-wc-divider
      aria-label="Divider"
      color="tertiary"
      content=""
      orientation="vertical"
      position="center"
      :responsive="true"
    ></modus-wc-divider>
  </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for default divider example
</script> 
<style>
.divider-container {
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #e0e0e0;
  margin: 10px;
}
</style>