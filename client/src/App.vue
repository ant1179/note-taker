<template>
  <v-layout>
    <v-app>
      <v-app-bar>
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>Note taker</v-app-bar-title>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list nav>
          <v-list-item title="Navigation drawer" link></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const drawer = ref(false)
</script>

<style scoped lang="scss">
@use "./assets/base.scss" as *;

.v-application {
  min-width: 100vw;
}
</style>
