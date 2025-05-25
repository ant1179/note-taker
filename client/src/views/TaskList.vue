<template>
  <v-container>
    <h1>Tasks</h1>
    <v-alert
      v-if="error"
      type="error"
      closable
    >
      {{ error }}
    </v-alert>
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
    />
    <TaskTable
      v-else
      :tasks="tasks"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import TaskTable from '@/components/TaskTable.vue'

interface Task {
  id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
}

const tasks = ref<Task[]>([])
const loading = ref(true)
const error = ref('')

const fetchTasks = async () => {
  try {
    const { data } = await axios.get<Task[]>('/api/task/list')
    tasks.value = data
  } catch (err) {
    error.value = 'Failed to load tasks. Please try again later.'
    console.error('Error fetching tasks:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchTasks()
})
</script>