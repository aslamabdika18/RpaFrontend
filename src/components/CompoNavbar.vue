<template>
  <nav
    :class="{
      'bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white font-semibold text-md': !isScrolled, // default gradient
      'bg-green-600 bg-opacity-80 text-white font-semibold shadow-md': isScrolled, // color with opacity when scrolled
      'p-4': true,
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300': true
    }"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div
        :class="{
          'text-2xl font-bold text-white hover:text-green-100 transition-colors duration-300': !isScrolled, // default color
          'text-2xl font-bold text-white hover:text-green-300 transition-colors duration-300': isScrolled // darker text when scrolled
        }"
      >
      <router-link to="/">
  <img src="/public/logo.jpeg" alt="Logo" class="h-12 w-auto">
</router-link>

      </div>
      <ul class="hidden md:flex space-x-8">
        <li>
          <router-link
            to="/"
            :class="{
              'text-white  hover:text-green-300 transition-colors duration-300': !isScrolled, // default text color
              'text-white hover:text-green-300 transition-colors duration-300': isScrolled // darker text when scrolled
            }"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            :class="{
              'text-white hover:text-green-300 transition-colors duration-300': !isScrolled, // default text color
              'text-white hover:text-green-300 transition-colors duration-300': isScrolled // darker text when scrolled
            }"
          >
            About
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            :class="{
              'text-white hover:text-green-300 transition-colors duration-300': !isScrolled, // default text color
              'text-white hover:text-green-300 transition-colors duration-300': isScrolled // darker text when scrolled
            }"
          >
            Contact
          </router-link>
        </li>
        <li>
          <router-link
            to="/donate"
            :class="{
              'text-white hover:text-green-300 transition-colors duration-300': !isScrolled, // default text color
              'text-white hover:text-green-300 transition-colors duration-300': isScrolled // darker text when scrolled
            }"
          >
            Donate
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
              <router-link to="/" @click="closeMenu" class="hover:text-green-300">Home</router-link>
            </li>
            <li>
              <router-link to="/about" @click="closeMenu" class="hover:text-green-300">About</router-link>
            </li>
            <li>
              <router-link to="/contact" @click="closeMenu" class="hover:text-green-300">Contact</router-link>
            </li>
            <li>
              <router-link to="/donate" @click="closeMenu" class=" hover:text-green-300">Donasi</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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
