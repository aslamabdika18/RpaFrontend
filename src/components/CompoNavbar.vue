<template>
  <nav
    :class="{
      'text-white font-bold text-xl opacity-80 shadow-md': !isScrolled,
      'bg-primary bg-opacity-80 text-white font-bold shadow-md text-xl': isScrolled,
      'p-4': true,
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300': true
    }"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div
        :class="{
          'text-2xl font-bold text-white hover:text-green-100 transition-colors duration-300': !isScrolled,
          'text-2xl font-bold text-white hover:text-green-300 transition-colors duration-300': isScrolled
        }"
      >
      <div class="p-4 bg-white rounded-xl shadow-md w-fit mx-auto">
        <router-link to="/">
          <img :src="Logo" alt="Logo" class="h-12" />
        </router-link>
      </div>
      </div>
      <ul class="hidden md:flex space-x-8">
        <li>
          <router-link
            to="/"
            :class="{
              'text-white relative overflow-hidden': !isScrolled,
              'text-white relative overflow-hidden': isScrolled
            }"
          >
            <span class="block transition-all duration-300 hover:bg-green-700 py-2 px-4">
              Home
            </span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            :class="{
              'text-white relative overflow-hidden': !isScrolled,
              'text-white relative overflow-hidden': isScrolled
            }"
          >
            <span class="block transition-all duration-300 hover:bg-green-700 py-2 px-4">
              About Us
            </span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            :class="{
              'text-white relative overflow-hidden': !isScrolled,
              'text-white relative overflow-hidden': isScrolled
            }"
          >
            <span class="block transition-all duration-300 hover:bg-green-700 py-2 px-4">
              Contact
            </span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/donate"
            :class="{
              'text-white relative overflow-hidden': !isScrolled,
              'text-white relative overflow-hidden': isScrolled
            }"
          >
            <span class="block transition-all duration-300 hover:bg-green-700 py-2 px-4">
              Donate
            </span>
          </router-link>
        </li>
      </ul>
      <!-- Mobile Menu -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white">
          <i class="fas fa-bars"></i>
        </button>
        <div v-if="isMenuOpen" class="absolute bg-green-600 text-white w-full top-16 left-0 p-4">
          <ul class="space-y-4">
            <li>
              <router-link to="/" @click="closeMenu" class="transition-all duration-300">
                <span class="block transition-all duration-300 hover:bg-green-700 py-2 px-4">Home</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about" @click="closeMenu" class="transition-all duration-300">
                <span class="block transition-all duration-300 hover:bg-green-700 py-2 px-4">About Us</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" @click="closeMenu" class="transition-all duration-300">
                <span class="block transition-all duration-300 hover:bg-green-700 py-2 px-4">Contact</span>
              </router-link>
            </li>
            <li>
              <router-link to="/donate" @click="closeMenu" class="transition-all duration-300">
                <span class="block transition-all duration-300 hover:bg-green-700 py-2 px-4">Donate</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Logo from '@/assets/logo/logo.png';
const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0; // Detect if the page is scrolled
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll); // Listen for scroll events
});
</script>
