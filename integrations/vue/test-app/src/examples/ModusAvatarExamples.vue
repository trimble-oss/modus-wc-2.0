<template>
  <div>
    <h3>Modus Avatar</h3>
    <ModusWcAvatar v-if="isReady"
      :alt="alt"
      aria-label="Avatar"
      :imgSrc="imgSrc"
      :shape="shape"
      :size="size"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcAvatar } from '@trimble-oss/moduswebcomponents-vue';

const isReady = ref(false);
const alt = ref('Example avatar');
const imgSrc = ref('https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg');
const shape = ref('circle');
const size = ref('md');

onMounted(() => {
  isReady.value = true;
});
</script> 