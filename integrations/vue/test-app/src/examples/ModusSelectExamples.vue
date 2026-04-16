<template>
  <div>
    <h3>Modus Select</h3>
    <ModusWcSelect v-if="isReady"
      aria-label="Select an option"
      :label="label"
      :options="options"
      :helperText="helperText"
      :value="selectedValue"
      @valueChange="(e) => selectedValue = e.detail"
    />
    <p>Selected value: {{ selectedValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcSelect } from '@trimble-oss/moduswebcomponents-vue';

interface ISelectOption {
  label: string;
  value: string;
}

const isReady = ref(false);
const label = ref('Choose an option');
const helperText = ref('Select an option');
const selectedValue = ref('');
const options = ref<ISelectOption[]>([]);

onMounted(() => {
  options.value = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
  ];
  selectedValue.value = 'option2';
  isReady.value = true;
});
</script> 