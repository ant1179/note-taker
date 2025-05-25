<template>
  <v-data-table
    :headers="headers"
    :items="tasks"
    class="elevation-1"
  >
    <template v-slot:item.title="{ item }">
      {{ item.title }}
    </template>
    <template v-slot:item.description="{ item }">
      {{ item.description }}
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
interface Task {
  title: string
  description: string
}

const props = defineProps<{
  tasks: Task[]
}>()

const headers = [
  { title: 'Title', key: 'title' },
  { title: 'Description', key: 'description' }
]
</script>