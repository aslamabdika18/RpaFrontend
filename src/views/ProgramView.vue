<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative">
      <div class="bg-primary text-white py-20 text-center">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold">{{ currentProgram.title }}</h1>
          <p class="mt-4 text-xl max-w-2xl mx-auto">{{ currentProgram.description }}</p>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-3xl"></div>
    </section>

    <!-- Breadcrumb Navigation -->
    <nav class="container mx-auto px-4 py-4 text-sm text-gray-600">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center">
          <router-link to="/" class="hover:text-primary">Beranda</router-link>
          <i class="fas fa-chevron-right mx-2 text-xs"></i>
        </li>
        <li class="flex items-center">
          <router-link to="/programs" class="hover:text-primary">Program</router-link>
          <i class="fas fa-chevron-right mx-2 text-xs"></i>
        </li>
        <li class="flex items-center text-primary font-medium">
          {{ currentProgram.title }}
        </li>
      </ol>
    </nav>

    <!-- Program Details Section -->
    <section class="container mx-auto px-4 py-12 max-w-6xl">
      <div class="bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Detail Program</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Program Details -->
          <div>
            <ul class="space-y-4">
              <li
                v-for="(detail, index) in currentProgram.details"
                :key="index"
                class="flex items-start"
              >
                <span class="bg-primary/10 text-primary rounded-full p-2 mr-4">
                  <i class="fas fa-check text-sm"></i>
                </span>
                <span class="text-gray-700">{{ detail }}</span>
              </li>
            </ul>

            <div class="mt-8">
              <h3 class="text-xl font-semibold mb-4">Tentang Program Ini</h3>
              <p class="text-gray-700 leading-relaxed text-justify">
                {{ currentProgram.longDescription }}
              </p>
            </div>

            <div v-if="currentProgram.stats" class="mt-8 grid grid-cols-2 gap-4">
              <div
                v-for="(stat, index) in currentProgram.stats"
                :key="index"
                class="bg-gray-50 p-4 rounded-lg text-center"
              >
                <p class="text-3xl font-bold text-primary">{{ stat.value }}</p>
                <p class="text-gray-600">{{ stat.label }}</p>
              </div>
            </div>
          </div>

          <!-- Program Gallery -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Dokumentasi Kegiatan</h3>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="(image, index) in currentProgram.images"
                :key="index"
                class="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  :src="image"
                  :alt="`Dokumentasi ${currentProgram.title} ${index + 1}`"
                  class="w-full h-40 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  @click="openLightbox(index)"
                />
              </div>
            </div>

            <div v-if="currentProgram.testimonials" class="mt-8">
              <h3 class="text-xl font-semibold mb-4">Testimoni Penerima Manfaat</h3>
              <div class="space-y-4">
                <div
                  v-for="(testimonial, index) in currentProgram.testimonials"
                  :key="index"
                  class="bg-gray-50 p-4 rounded-lg"
                >
                  <p class="text-gray-700 italic">"{{ testimonial.quote }}"</p>
                  <p class="mt-2 text-sm font-medium text-gray-900">- {{ testimonial.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-12 text-center">
        <h3 class="text-2xl font-bold mb-4">Tertarik dengan program ini?</h3>
        <router-link
          to="/donate"
          class="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300"
        >
          Dukung Sekarang
        </router-link>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div
      v-if="showLightbox"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      @click.self="closeLightbox"
    >
      <div class="relative max-w-4xl w-full">
        <button
          @click="closeLightbox"
          class="absolute -top-12 right-0 text-white text-2xl hover:text-primary transition"
        >
          <i class="fas fa-times"></i>
        </button>
        <img
          :src="currentProgram.images[lightboxIndex]"
          :alt="`Dokumentasi ${currentProgram.title}`"
          class="w-full max-h-[80vh] object-contain"
        />
        <div class="flex justify-between mt-4">
          <button
            @click="prevImage"
            class="text-white hover:text-primary transition"
            :disabled="lightboxIndex === 0"
            :class="{ 'opacity-50 cursor-not-allowed': lightboxIndex === 0 }"
          >
            <i class="fas fa-chevron-left text-2xl"></i>
          </button>
          <span class="text-white"
            >{{ lightboxIndex + 1 }} / {{ currentProgram.images.length }}</span
          >
          <button
            @click="nextImage"
            class="text-white hover:text-primary transition"
            :disabled="lightboxIndex === currentProgram.images.length - 1"
            :class="{
              'opacity-50 cursor-not-allowed': lightboxIndex === currentProgram.images.length - 1,
            }"
          >
            <i class="fas fa-chevron-right text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { programs } from '@/data/programs.js'

const route = useRoute()

// Find the current program based on route ID
const currentProgram = computed(() => {
  return programs.find((program) => program.id === parseInt(route.params.id)) || programs[0]
})

// Lightbox functionality
const showLightbox = ref(false)
const lightboxIndex = ref(0)

const openLightbox = (index) => {
  lightboxIndex.value = index
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  showLightbox.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (lightboxIndex.value < currentProgram.value.images.length - 1) {
    lightboxIndex.value++
  }
}

const prevImage = () => {
  if (lightboxIndex.value > 0) {
    lightboxIndex.value--
  }
}

// Keyboard navigation for lightbox
const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    closeLightbox()
  } else if (e.key === 'ArrowRight') {
    nextImage()
  } else if (e.key === 'ArrowLeft') {
    prevImage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  // Scroll to top when component mounts
  window.scrollTo(0, 0)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Custom styles for the program view */
.router-link-active {
  color: inherit;
}
</style>
