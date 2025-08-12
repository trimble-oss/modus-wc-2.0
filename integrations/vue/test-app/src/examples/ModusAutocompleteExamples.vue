<template>
  <div>
    <h3>Modus Autocomplete</h3>
    <ModusWcAutocomplete v-if="isLoaded"
      ref="autocompleteRef"
      label="Fruit List"
      :items="items"
      :value="inputValue"
      @input="handleInputChange"
      @keydown="handleKeyDown"
      @itemSelect="handleItemSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { ModusWcAutocomplete } from '@trimble-oss/moduswebcomponents-vue';

interface IAutocompleteItem {
  label: string;
  value: string;
  visibleInMenu?: boolean;
  disabled?: boolean;
  focused?: boolean;
  selected?: boolean;
}

const isLoaded = ref(false);

onMounted(() => {
  isLoaded.value = true;
});

const autocompleteRef = ref();
const inputValue = ref('');
const items = reactive<IAutocompleteItem[]>([
  { label: 'Apple', value: 'apple', visibleInMenu: true },
  { label: 'Banana', value: 'banana', visibleInMenu: true },
  { label: 'Cherry', value: 'cherry', visibleInMenu: true },
  { label: 'Date', value: 'date', visibleInMenu: true },
  { label: 'Elderberry', value: 'elderberry', visibleInMenu: true },
]);

function updateAutocompleteItems() {
  if (autocompleteRef.value) {
    autocompleteRef.value.items = [...items];
  }
}

function handleKeyDown(e: KeyboardEvent) {
  // Find the autocomplete element
  const autocomplete = autocompleteRef.value;
  if (!autocomplete) return;

  // Prevent default for navigation keys
  if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
    e.preventDefault();
  }

  const visibleItems = items.filter(
    (item) => item.visibleInMenu && !item.disabled
  );

  switch (e.key) {
    case 'Escape':
      items.forEach((item) => (item.focused = false));
      updateAutocompleteItems();
      return;

    case 'ArrowDown': {
      const currentIndex = visibleItems.findIndex((item) => item.focused);
      const nextIndex =
        currentIndex < 0
          ? 0
          : Math.min(currentIndex + 1, visibleItems.length - 1);
      items.forEach((item) => {
        item.focused = visibleItems[nextIndex]?.value === item.value;
      });
      break;
    }

    case 'ArrowUp': {
      const currentIndex = visibleItems.findIndex((item) => item.focused);
      const prevIndex =
        currentIndex < 0
          ? visibleItems.length - 1
          : Math.max(currentIndex - 1, 0);
      items.forEach((item) => {
        item.focused = visibleItems[prevIndex]?.value === item.value;
      });
      break;
    }

    case 'Enter': {
      const focusedItem = visibleItems.find((item) => item.focused);
      if (focusedItem) {
        items.forEach((item) => {
          item.selected = item.value === focusedItem.value;
          item.focused = false;
        });
        inputValue.value = focusedItem.label;
      }
      break;
    }

    default:
      return;
  }

  updateAutocompleteItems();
}

function handleInputChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (!target) return;

  const searchText = target.value.toLowerCase();
  items.forEach((item) => {
    item.visibleInMenu = item.label.toLowerCase().includes(searchText);
    item.focused = false;
    item.selected = searchText ? item.selected : false;
  });

  inputValue.value = target.value;
  updateAutocompleteItems();
}

function handleItemSelect(e: CustomEvent<IAutocompleteItem>) {
  const label = e.detail.label;
  if (label) {
    inputValue.value = label;
  }

  // Clear the previous selection.
  items.forEach((item) => (item.selected = false));

  // Mark the user selected menu item as selected and update items.
  const foundItem = items.find((item) => item.value === e.detail.value);
  if (foundItem) {
    foundItem.selected = true;
    updateAutocompleteItems();
  }
}
</script>
