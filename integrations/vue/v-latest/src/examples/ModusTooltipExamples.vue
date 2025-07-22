<template>
  <div>
    <h3>Modus Tooltip</h3>
    <modus-wc-tooltip
      content="This is a tooltip text"
      :disabled="false"
      :force-open="false"
      position="right"
    >
      <modus-wc-badge>Hover</modus-wc-badge>
    </modus-wc-tooltip>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for default tooltip example
</script> 