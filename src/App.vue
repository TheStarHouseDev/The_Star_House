<template>
  <div class="app-shell">
    <MainNavbar />
    <main class="main-content">
      <RouterView />
    </main>
    <MainFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import MainNavbar from './components/MainNavbar.vue'
import MainFooter from './components/MainFooter.vue'
</script>
