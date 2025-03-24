<template>
  <div class="min-h-max bg-white flex flex-col justify-center items-center">
    <!-- Header Section -->
    <header class="bg-primary text-white py-12 text-center w-full">
      <h1 class="text-4xl font-bold mt-16">Program Kami</h1>
      <p class="mt-4 text-lg">Menjembatani mereka yang berkelebihan dengan yang berkebutuhan</p>
    </header>

    <!-- Program Cards Section -->
    <section class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-start max-w-7xl">
      <ProgramCard
        v-for="program in programs"
        :key="program.id"
        :id="program.id"
        :title="program.title"
        :description="program.description"
        :details="program.details"
        :icon="program.icon"
      />
    </section>
  </div>
</template>

<script setup>
import ProgramCard from "@/components/ProgramCard.vue";
import { programs } from "@/data/programs.js";

// Use the imported programs data
</script>
