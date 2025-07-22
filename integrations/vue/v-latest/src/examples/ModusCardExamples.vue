<template>
  <div>
    <h3>Modus Card</h3>
    <modus-wc-card
      aria-label="Sample card"
      :background-figure="false"
      :bordered="false"
      layout="vertical"
      padding="normal"
      style="width: 400px"
    >
      <span slot="title">Card Title</span>
      <span slot="subtitle">Card Subtitle</span>
      <p>This is a sample card content. You can place any content here.</p>
      <div slot="actions" class="modus-wc-justify-end">
        <modus-wc-button aria-label="Click me">Click me</modus-wc-button>
      </div>
    </modus-wc-card>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for default card example
</script> 