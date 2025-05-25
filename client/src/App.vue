<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-layout>
    <v-app>
      <v-app-bar title="Note taker"></v-app-bar>

      <v-navigation-drawer>
        <v-list nav>
          <v-list-item title="Navigation drawer" link></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container
          fluid
        >
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </v-layout>
</template>

<style scoped lang="scss">
@use "./assets/base.scss" as *;

.v-application {
  min-width: 100vw;
}
</style>
