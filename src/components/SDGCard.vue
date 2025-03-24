<template>
  <div class="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform duration-300">
    <img :src="icon" alt="SDG Icon" class="w-16 h-16 md:w-12 md:h-12 mb-4 mx-auto" />
    <h3 class="text-lg md:text-xl font-semibold text-gray-700 mb-2">{{ title }}</h3>
    <p class="text-base md:text-lg text-gray-600 normal-case leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
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
});
</script>
