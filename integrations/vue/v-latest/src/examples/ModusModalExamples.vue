<template>
  <div>
    <h3>Modus Modal</h3>
    <modus-wc-button @buttonClick="handleModalVisibility('show')">
      Open modal
    </modus-wc-button>
    <modus-wc-modal
      aria-label="Example modal"
      :fullscreen="false"
      modal-id="my_modal_1"
      backdrop="default"
      position="center"
      :show-close="true"
      :show-fullscreen-toggle="false"
    >
      <span slot="header">Modal Title</span>
      <span slot="content"> This is sample modal content. </span>
      <modus-wc-button slot="footer" @buttonClick="handleModalVisibility('hide')">
        Close
      </modus-wc-button>
    </modus-wc-modal>
  </div>
</template>

<script setup lang="ts">
function handleModalVisibility(action: 'show' | 'hide') {
  const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
  if (modal) {
    if (action === 'show') {
      modal.showModal();
    } else {
      modal.close();
    }
  }
}
</script> 