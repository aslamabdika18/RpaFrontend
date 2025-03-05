<script setup>
import { RouterView } from 'vue-router'
import CompoNavbarVue from './components/CompoNavbar.vue'
import CompoFooterVue from './components/CompoFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar Component -->
    <CompoNavbarVue />
    <!-- Content Section -->
    <RouterView />
    <!-- Footer Section -->
    <CompoFooterVue />
  </div>
</template>
