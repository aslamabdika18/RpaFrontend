<template>
  <div
    class="bg-white rounded-lg shadow-lg p-6 flex flex-col min-h-96 hover:shadow-xl transition-shadow duration-300"
  >
    <!-- Bagian atas card -->
    <div class="flex flex-col items-center text-center flex-grow">
      <!-- Ikon -->
      <i :class="`fas fa-${icon} text-4xl text-primary mb-4`"></i>
      <!-- Judul -->
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <!-- Deskripsi -->
      <p class="mt-4 text-gray-700">{{ description }}</p>
    </div>

    <!-- Tombol Detail -->
    <div class="mt-auto flex justify-center">
      <router-link
        :to="`/program/${id}`"
        class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition duration-300 w-full text-center"
      >
        Detail
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  details: {
    type: Array,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
/* Add any custom card styles here */
</style>
