<template>
  <div>
    <h3>Modus Toast</h3>
    <div style="height: 200px;">
      <modus-wc-toast
        :delay="5000"
        position="bottom-right"
      >
        <modus-wc-alert alert-title="Message sent successfully!" variant="success"></modus-wc-alert>
      </modus-wc-toast>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for default toast example
</script> 