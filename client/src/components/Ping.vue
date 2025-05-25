<template>
  <div class="d-flex align-items-center gap-4">
    <v-btn
      :loading="loading"
      color="primary"
      @click="pingServer"
    >
      Ping Server
    </v-btn>
    <span v-if="response">Response: {{ response }}</span>
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
  } catch (error) {
    response.value = 'Error connecting to server'
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