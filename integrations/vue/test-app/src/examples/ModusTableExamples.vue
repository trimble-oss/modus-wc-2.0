<template>
  <div>
    <h3>Modus Table</h3>
    <div class="table-container">
    <ModusWcTable v-if="isLoaded"
      aria-label="Example table"
      :bordered="true"
      :columns="columns"
      :data="data"
      :hover="true"
      size="md"
      :striped="false"
    />
    <div v-else>Loading table data...</div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ModusWcTable } from '@trimble-oss/moduswebcomponents-vue';

interface ITableColumn {
  id: string;
  header: string;
  accessor: string;
  width?: string;
}

interface ITableData {
  id: string;
  name: string;
  email: string;
  role: string;
}

const isLoaded = ref(false);
const columns = ref<ITableColumn[]>([]);
const data = ref<ITableData[]>([]);

onMounted(async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  columns.value = [
    {
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: '60px',
    },
    {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: '100px',
    },
    {
      id: 'email',
      header: 'Email',
      accessor: 'email',
    },
    {
      id: 'role',
      header: 'Role',
      accessor: 'role',
      width: '80px',
    },
  ];

  data.value = [
    { id: '1', name: 'User 1', email: 'user1@example.com', role: 'User' },
    { id: '2', name: 'User 2', email: 'user2@example.com', role: 'Admin' },
    { id: '3', name: 'User 3', email: 'user3@example.com', role: 'User' },
    { id: '4', name: 'User 4', email: 'user4@example.com', role: 'Admin' },
    { id: '5', name: 'User 5', email: 'user5@example.com', role: 'User' },
  ];
  
  isLoaded.value = true;
});
</script> 
<style>
.table-container {
  background-color: #ffffff;
}
</style>