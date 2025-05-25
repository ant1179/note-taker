<template>
  <div class="d-flex align-items-center gap-4">
    <v-btn
      :loading="loading"
      :color="response === 'pong' ? 'success' : 'primary'"
      @click="pingServer"
    >
      Ping Server
    </v-btn>
    <span :class="{ 'text-error': response.includes('Error') }">
      Response: {{ response }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const response = ref('')
const loading = ref(false)

const pingServer = async () => {
  loading.value = true
  try {
    const { data } = await axios.get('/api/ping')
    response.value = data.message
  } catch (error: any) {
    console.error('Ping error:', error)
    response.value = `Error: ${error.response?.data?.message || error.message}`
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.gap-4 {
  gap: 1rem;
}
</style>