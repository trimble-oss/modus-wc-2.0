<template>
  <div>
    <h3>Modus Menu</h3>
    <ModusWcMenu
      aria-label="Menu"
      orientation="vertical"
      size="md"
    >
      <ModusWcMenuItem
        label="Small"
        value="1"
        size="sm"
      />
      <ModusWcMenuItem label="Medium" value="2" />
      <ModusWcMenuItem
        label="Large"
        value="3"
        size="lg"
      />
      <ModusWcMenuItem
        label="Bordered"
        value="3"
        :bordered="true"
      />
      <ModusWcMenuItem
        label="With Sub-label"
        value="3"
        subLabel="Sub-label"
      />
      <ModusWcMenuItem
        label="Selected"
        value="3"
        :selected="true"
      />
    </ModusWcMenu>
  </div>
</template>

<script setup lang="ts">
import { ModusWcMenu, ModusWcMenuItem } from '@trimble-oss/moduswebcomponents-vue';
</script> 