<template>
  <div class="bg-rpa-light min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen">
      <div class="absolute inset-0">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-500"
          :class="{ 'opacity-0': currentImageIndex !== index }"
          :style="`background-image: url(${image})`"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-b from-tertiary/60 to-tertiary/60 opacity-50"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative h-full flex items-center justify-center">
        <div class="text-center text-white px-4">
          <img :src="Logo" alt="RPA Logo" class="mx-auto mb-8 w-64" />
          <h1 class="text-5xl font-bold mb-6">
            Menjembatani Yang Berkelebihan Dengan Yang Berkebutuhan
          </h1>
          <p class="text-xl mb-8 max-w-3xl mx-auto">
            Rumoh Pangan Aceh (RPA) adalah lembaga sosial yang bergerak untuk membantu mengurangi
            kesenjangan pangan di masyarakat.
          </p>
          <router-link
            to="/donate"
            class="inline-block px-8 py-3 bg-tertiary hover:bg-primary rounded-lg transition-all duration-300"
          >
            Donasi Sekarang
          </router-link>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="prevImage"
        class="absolute top-1/2 left-6 transform -translate-y-1/2 text-white text-4xl hover:text-rpa-light transition-colors duration-300 focus:outline-none"
      >
        ←
      </button>
      <button
        @click="nextImage"
        class="absolute top-1/2 right-6 transform -translate-y-1/2 text-white text-4xl hover:text-rpa-light transition-colors duration-300 focus:outline-none"
      >
        →
      </button>
    </section>

    <!-- Program Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-semibold text-rpa-green text-center mb-12">Program Kami</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Food Rescue Program -->
          <div
            class="bg-white shadow-xl p-8 rounded-lg flex flex-col items-center justify-center text-center"
          >
            <div class="w-16 h-16 mb-4 text-primary">
              <!-- Food Rescue Icon (FontAwesome Outline) -->
              <i class="fa-solid fa-box-open text-4xl"></i>
            </div>
            <h3 class="text-2xl font-semibold text-rpa-green mb-4">Food Rescue</h3>
            <p class="text-gray-600">
              Penyelamatan surplus makanan dari industri untuk dibagikan kepada masyarakat
              pra-sejahtera di Banda Aceh.
            </p>
          </div>

          <!-- Sedekah Sayur Program -->
          <div
            class="bg-white shadow-xl p-8 rounded-lg flex flex-col items-center justify-center text-center"
          >
            <div class="w-16 h-16 mb-4 text-primary">
              <!-- Sedekah Sayur Icon (FontAwesome Outline) -->
              <i class="fa-solid fa-leaf text-4xl"></i>
            </div>
            <h3 class="text-2xl font-semibold text-rpa-green mb-4">Sedekah Sayur</h3>
            <p class="text-gray-600">
              Program bantuan untuk petani dalam menjual hasil panen dengan harga yang layak.
            </p>
          </div>

          <!-- Sharing Session Program -->
          <div
            class="bg-white shadow-xl p-8 rounded-lg flex flex-col items-center justify-center text-center"
          >
            <div class="w-16 h-16 mb-4 text-primary">
              <!-- Sharing Session Icon (FontAwesome Outline) -->
              <i class="far fa-comments text-4xl"></i>
            </div>
            <h3 class="text-2xl font-semibold text-rpa-green mb-4">Sharing Session</h3>
            <p class="text-gray-600">
              Edukasi dan diskusi dengan para ahli tentang pertanian dan ketahanan pangan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary text-white text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-6">
          Bergabunglah Dalam Upaya Mengurangi Kesenjangan Pangan
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          Bersama kita dapat menciptakan komunitas di mana setiap orang mempunyai akses terhadap
          makanan yang cukup dan bergizi.
        </p>
        <router-link
          to="/donate"
          class="inline-block px-8 py-3 bg-tertiary text-white hover:bg-amber-400 rounded-lg transition-all duration-300"
        >
          Donasi Sekarang
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Logo from '@/assets/logo/Logo.jpeg'

const images = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg']

const currentImageIndex = ref(0)

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length
}

setInterval(nextImage, 5000)
</script>
