<template>
  <div>
    <h3>Modus Alert</h3>
    <ModusWcAlert v-if="isReady"
      :alertDescription="alertDescription"  
      :alertTitle="alertTitle"                  
      :dismissible="false"
      role="status"
      variant="info"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcAlert } from '@trimble-oss/moduswebcomponents-vue';

const alertDescription = ref('You have 3 new messages.');
const alertTitle = ref('New message!');

const isReady = ref(false);

onMounted(() => {
  isReady.value = true;
});
</script>