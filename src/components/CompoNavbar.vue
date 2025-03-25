<template>
  <nav
    :class="{
      'text-white font-bold text-lg opacity-80 shadow-md md:py-2': !isScrolled,
      'bg-primary bg-opacity-80 text-white font-bold shadow-md text-lg': isScrolled,
      'p-4': true,
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300': true,
    }"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="p-3 bg-white rounded-lg shadow-md w-fit">
        <router-link to="/">
          <img :src="Logo" alt="Logo" class="h-8" />
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-4 lg:space-x-8">
        <li v-for="item in navItems" :key="item.path">
          <router-link
            :to="item.path"
            class="text-white relative overflow-hidden"
            active-class="text-green-300"
          >
            <span class="block transition-all duration-300 hover:bg-green-700 py-2 px-3 lg:px-4 rounded-md">
              {{ item.name }}
            </span>
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-2xl"></i>
      </button>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMenuOpen"
          class="md:hidden absolute bg-green-600 text-white w-full left-0 p-4 shadow-lg"
          :class="isScrolled ? 'top-16' : 'top-20'"
        >
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.path">
              <router-link
                :to="item.path"
                @click="closeMenu"
                class="block transition-all duration-300 hover:bg-green-700 py-3 px-4 rounded-md"
                active-class="bg-green-800"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Logo from '@/assets/logo/logo.png'

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About Us' },
  { path: '/programs', name: 'Programs' },
  { path: '/partners', name: 'Partners' },
  { path: '/donate', name: 'Donate' },
  { path: '/contact', name: 'Contact' }
]

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Close menu when clicking outside
const handleClickOutside = (event) => {
  const nav = document.querySelector('nav')
  if (nav && !nav.contains(event.target)) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.router-link-active span {
  @apply bg-green-700;
}
</style>
