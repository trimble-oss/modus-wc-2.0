<template>
  <div>
    <h3>Modus Pagination</h3>
    <ModusWcPagination
      :count="15"
      :page="1"
      size="md"
    />
  </div>
</template>

<script setup lang="ts">
import { ModusWcPagination } from '@trimble-oss/moduswebcomponents-vue';
</script> 