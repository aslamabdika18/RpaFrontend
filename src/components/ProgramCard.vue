<template>
  <div
    class="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full text-center">
    <div class="p-6">
      <i :class="`fas fa-${icon} text-4xl mb-4 text-primary`"></i>
      <h2 class="text-2xl font-bold text-black">{{ title }}</h2>
      <p class="mt-4 text-gray-700">{{ description }}</p>
    </div>
    <div class="p-6 flex justify-center">
      <button @click="openDetail"
        class="bg-gradient-to-r from-primary to-secondary text-black font-semibold py-3 px-6 rounded-lg hover:from-secondary hover:to-primary transition-all duration-500 flex items-center justify-center gap-2 group">
        <span class="group-hover:translate-x-1 transition-transform duration-300">Lihat Detail</span>
        <i class="fa-regular fa-circle-right h-5 w-5 group-hover:rotate-90 transition-transform duration-300"></i>
      </button>
    </div>
  </div>
</template>

<script setup>

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
  icon: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['open-detail'])

const openDetail = () => {
  emit('open-detail', props.id)
}
</script>
