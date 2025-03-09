<template>
  <div class="bg-secondary rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
    <!-- Konten Card -->
    <div class="p-6">
      <h2 class="text-2xl font-bold text-black">{{ title }}</h2>
      <p class="mt-4 text-gray-700">{{ description }}</p>
    </div>

    <!-- Tombol Lihat Detail -->
    <div class="p-6 flex justify-center">
      <button
        class="bg-gradient-to-r from-tertiary to-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-tertiary transition-all duration-500 flex items-center justify-center gap-2 group"
        @click="openDetail"
      >
        <span class="group-hover:translate-x-1 transition-transform duration-300">Lihat Detail</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 group-hover:rotate-90 transition-transform duration-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// Props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})

// Emits
const emit = defineEmits(['open-detail'])

// Method untuk membuka detail
const openDetail = () => {
  emit('open-detail', props.id)
}
</script>

<style scoped>
/* Custom styles can be added here if needed */
</style>
