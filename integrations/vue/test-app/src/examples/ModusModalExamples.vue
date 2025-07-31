<template>
  <div>
    <h3>Modus Modal</h3>
    <ModusWcButton v-if="isReady" @buttonClick="handleModalVisibility('show')">
      Open modal
    </ModusWcButton>
    <ModusWcModal v-if="isReady"
      aria-label="Example modal"
      :fullscreen="fullscreen"
      :modalId="modalId"
      :backdrop="backdrop"
      :position="position"
      :showClose="showClose"
      :showFullscreenToggle="showFullscreenToggle"
    >
      <span slot="header">Modal Title</span>
      <span slot="content"> This is sample modal content. </span>
      <ModusWcButton slot="footer" @buttonClick="handleModalVisibility('hide')">
        Close
      </ModusWcButton>
    </ModusWcModal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcButton, ModusWcModal } from '@trimble-oss/moduswebcomponents-vue';

const isReady = ref(false);
const fullscreen = ref(false);
const modalId = ref('my_modal_1');
const backdrop = ref('default');
const position = ref('center');
const showClose = ref(true);
const showFullscreenToggle = ref(false);

onMounted(() => {
  isReady.value = true;
});

function handleModalVisibility(action: 'show' | 'hide') {
  const modal = document.getElementById(modalId.value) as HTMLDialogElement;
  if (modal) {
    if (action === 'show') {
      modal.showModal();
    } else {
      modal.close();
    }
  }
}
</script> 