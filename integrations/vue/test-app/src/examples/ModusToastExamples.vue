<template>
  <div>
    <h3>Modus Toast</h3>
    <div style="height: 200px;">
      <ModusWcToast v-if="isReady"
        :delay="5000"
        position="bottom-right"
      >
        <ModusWcAlert :alertTitle="alertTitle" :alertDescription="alertDescription" variant="success" />
      </ModusWcToast>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcToast, ModusWcAlert } from '@trimble-oss/moduswebcomponents-vue';

const alertDescription = ref('You have 3 new messages.');
const alertTitle = ref('New message!');

const isReady = ref(false);

onMounted(() => {
  isReady.value = true;
});
</script> 