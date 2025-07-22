<template>
  <div>
    <h3>Modus Rating</h3>
    <ModusWcRating
      aria-label="Rating scale component"
      :count="5"
      size="md"
      :value="3"
      variant="smiley"
    />
  </div>
</template>

<script setup lang="ts">
import { ModusWcRating } from '@trimble-oss/moduswebcomponents-vue';
</script> 