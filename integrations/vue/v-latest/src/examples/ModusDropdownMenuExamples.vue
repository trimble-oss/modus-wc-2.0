a<template>
  <div>
    <h3>Modus Dropdown Menu</h3>
    <modus-wc-dropdown-menu
      button-color="primary"
      button-size="md"
      button-variant="filled"
      :disabled="false"
      :menu-bordered="true"
      :menu-offset="14"
      menu-placement="bottom-start"
      menu-size="md"
      :menu-visible="false"
    >
      <div slot="button">
        Button
        <modus-wc-icon name="expand_more" size="sm" />
      </div>

      <div slot="menu">
        <modus-wc-menu-item label="Item One" value="1" @itemSelect="handleItemSelect"></modus-wc-menu-item>
        <modus-wc-menu-item label="Item Two" value="2" @itemSelect="handleItemSelect"></modus-wc-menu-item>
        <modus-wc-menu-item label="Item Three" value="3" @itemSelect="handleItemSelect"></modus-wc-menu-item>
      </div>
    </modus-wc-dropdown-menu>

    <div class="value" style="font-size: 14px; padding-top: 12px;">
      Selected Value:
      <span>{{ selectedValue }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedValue = ref('');

function handleItemSelect(event: CustomEvent) {
  selectedValue.value = event.detail.value;
  
  // Close the dropdown menu when an item is selected
  const dropdownMenu = event.target as HTMLElement;
  const dropdownMenuElement = dropdownMenu.closest('modus-wc-dropdown-menu');
  if (dropdownMenuElement) {
    (dropdownMenuElement as any).menuVisible = false;
  }
}
</script> 

<style>
  [slot="button"] {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .value {
    font-size: 14px;
    padding-top: 12px;
  }
</style>