<template>
  <div>
    <h3>Modus Navbar</h3>
    <div style="border: 1px dashed black; height: 450px; overflow: hidden;">
      <ModusWcNavbar v-if="isLoaded"
        :condensed="false"
        :searchDebounceMs="300"
        :textOverrides="textOverrides"
        :userCard="userCard"
        :visibility="visibility"
      >
        <div slot="main-menu" style="background-color: #0063a3; color: white; height: 390px; overflow-y: auto;">
          Main menu contents
        </div>
        <div slot="notifications">Notification contents</div>
        <div slot="apps">App drawer contents</div>
      </ModusWcNavbar>
      <div v-else style="padding: 20px;">Loading navbar configuration...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcNavbar } from '@trimble-oss/moduswebcomponents-vue';

const isLoaded = ref(false);
const textOverrides = ref({});
const userCard = ref({});
const visibility = ref({});

onMounted(async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  textOverrides.value = {
    apps: 'Apps',
    help: 'Help',
    notifications: 'Notifications',
    search: 'Search',
  };

  userCard.value = {
    avatarAlt: 'Sonic',
    avatarSrc: '"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg"',
    email: 'sonic@trimble.com',
    name: 'Sonic the Hedgehog',
  };

  visibility.value = {
    ai: true,
    apps: true,
    help: true,
    mainMenu: true,
    notifications: true,
    search: true,
    searchInput: true,
    user: true,
  };
  
  isLoaded.value = true;
});
</script> 