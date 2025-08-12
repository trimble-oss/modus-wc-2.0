<template>
  <div>
    <h3>Modus Dropdown Menu</h3>
    <ModusWcDropdownMenu v-if="isReady"
      :buttonColor="buttonColor"
      :buttonSize="buttonSize"
      :buttonVariant="buttonVariant"
      :disabled="disabled"
      :menuBordered="menuBordered"
      :menuOffset="menuOffset"
      :menuPlacement="menuPlacement"
      :menuSize="menuSize"
      :menuVisible="menuVisible"
    >
      <div slot="button">
        Button
        <ModusWcIcon name="expand_more" size="sm" />
      </div>

      <div slot="menu">
        <ModusWcMenuItem label="Item One" value="1" @itemSelect="handleItemSelect" />
        <ModusWcMenuItem label="Item Two" value="2" @itemSelect="handleItemSelect" />
        <ModusWcMenuItem label="Item Three" value="3" @itemSelect="handleItemSelect" />
      </div>
    </ModusWcDropdownMenu>

    <div class="value" style="font-size: 14px; padding-top: 12px;">
      Selected Value:
      <span>{{ selectedValue }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcDropdownMenu, ModusWcIcon, ModusWcMenuItem } from '@trimble-oss/moduswebcomponents-vue';

const isReady = ref(false);
const buttonColor = ref('primary');
const buttonSize = ref('md');
const buttonVariant = ref('filled');
const disabled = ref(false);
const menuBordered = ref(true);
const menuOffset = ref(14);
const menuPlacement = ref('bottom-start');
const menuSize = ref('md');
const menuVisible = ref(false);
const selectedValue = ref('');

onMounted(() => {
  isReady.value = true;
});

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