<template>
  <div>
    <h3>Modus Input Feedback</h3>
    <ModusWcInputFeedback
      level="error"
      message="Uh oh. You done messed up."
      size="md"
    />
  </div>
</template>

<script setup lang="ts">
import { ModusWcInputFeedback } from '@trimble-oss/moduswebcomponents-vue';
</script> 