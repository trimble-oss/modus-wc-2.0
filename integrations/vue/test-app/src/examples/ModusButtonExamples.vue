<template>
  <div>
    <h3>Modus Button</h3>
    <ModusWcButton v-if="isReady"
      aria-label="Click me button"
      :color="color"
      :disabled="disabled"
      :fullWidth="fullWidth"
      :pressed="pressed"
      :shape="shape"
      :size="size"
      :type="type"
      :variant="variant"
      @click="handleButtonClick"
    >
      Click Me
    </ModusWcButton>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcButton } from '@trimble-oss/moduswebcomponents-vue';

const isReady = ref(false);
const color = ref('primary');
const disabled = ref(false);
const fullWidth = ref(false);
const pressed = ref(false);
const shape = ref('rectangle');
const size = ref('md');
const type = ref('button');
const variant = ref('filled');

onMounted(() => {
  isReady.value = true;
});

const handleButtonClick = (event: MouseEvent) => {
  console.log('Button clicked!', event);
};
</script> 