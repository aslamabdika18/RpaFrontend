<template>
  <div
    class="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform duration-300"
  >
    <i :class="`${icon[0]} fa-${icon[1]} text-4xl text-primary mb-4`"></i>
    <h3 class="text-lg md:text-xl font-semibold text-gray-700 mb-2">{{ title }}</h3>
    <p class="text-base md:text-lg text-gray-600 normal-case leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: Array,
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
})
</script>
