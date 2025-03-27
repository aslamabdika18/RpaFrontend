<template>
  <div
    class="bg-white rounded-xl shadow-lg p-6 md:p-8 transform hover:scale-105 transition-transform duration-300"
  >
    <h2 class="text-xl md:text-2xl font-bold text-primary mb-4">{{ title }}</h2>
    <ul v-if="Array.isArray(content)" class="space-y-3 normal-case text-gray-600">
      <li v-for="(item, index) in content" :key="index" class="flex items-start">
        <span class="text-primary mr-2">•</span>
        <span class="text-base md:text-lg">{{ item }}</span>
      </li>
    </ul>
    <p v-else class="text-base md:text-lg text-gray-600 normal-case leading-relaxed">
      {{ content }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: [String, Array],
    required: true,
  },
})
</script>
