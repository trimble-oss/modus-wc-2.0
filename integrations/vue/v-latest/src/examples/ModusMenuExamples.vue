<template>
  <div>
    <h3>Modus Menu</h3>
    <modus-wc-menu
      aria-label="Menu"
      orientation="vertical"
      size="md"
    >
      <modus-wc-menu-item
        label="Small"
        value="1"
        size="sm"
      ></modus-wc-menu-item>
      <modus-wc-menu-item label="Medium" value="2"></modus-wc-menu-item>
      <modus-wc-menu-item
        label="Large"
        value="3"
        size="lg"
      ></modus-wc-menu-item>
      <modus-wc-menu-item
        label="Bordered"
        value="3"
        :bordered="true"
      ></modus-wc-menu-item>
      <modus-wc-menu-item
        label="With Sub-label"
        value="3"
        sub-label="Sub-label"
      ></modus-wc-menu-item>
      <modus-wc-menu-item
        label="Selected"
        value="3"
        :selected="true"
      ></modus-wc-menu-item>
    </modus-wc-menu>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for default menu example
</script> 