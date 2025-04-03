<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Header Section -->
    <header class="bg-primary text-white py-12 text-center w-full">
      <h1 class="text-4xl font-bold mt-16">Program Kami</h1>
      <p class="mt-4 text-lg">Menjembatani mereka yang berkelebihan dengan yang berkebutuhan</p>
    </header>

    <!-- Program Cards Section -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full flex-grow">
      <div v-for="program in programs" :key="program.id" class="relative group overflow-hidden">
        <img
          :src="program.images[0]"
          :alt="program.title"
          class="w-full h-full min-h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
          <router-link
            :to="`/program/${program.id}`"
            class="text-white text-2xl font-bold uppercase tracking-wider text-center px-4 py-2 border-2 border-white transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary"
          >
            {{ program.title }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { programs } from '@/data/Programs.js'
</script>
