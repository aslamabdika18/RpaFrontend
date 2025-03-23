<template>
  <!-- Section Partners -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-primary mb-12">Our Partners</h2>

      <!-- Swiper Container Baris Atas -->
      <swiper
        :modules="[Autoplay]"
        :slides-per-view="6"
        :space-between="20"
        :loop="true"
        :autoplay="{
          delay: false,
          disableOnInteraction: false,
        }"
        :speed="5000"
        class="swiper-container mb-8"
      >
        <!-- Slide Items -->
        <swiper-slide v-for="(logo, index) in partners" :key="index">
          <img :src="logo" alt="Partner Logo" class="h-20 w-auto mx-auto" />
        </swiper-slide>
      </swiper>

      <!-- Swiper Container Baris Bawah -->
      <swiper
        :modules="[Autoplay]"
        :slides-per-view="6"
        :space-between="20"
        :loop="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true, // Arah terbalik
        }"
        :speed="5000"
        class="swiper-container"
      >
        <!-- Slide Items -->
        <swiper-slide v-for="(logo, index) in partners" :key="index">
          <img :src="logo" alt="Partner Logo" class="h-20 w-auto mx-auto" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

// Impor semua logo dalam folder 'Partners' secara dinamis
const partnerLogos = import.meta.glob('@/assets/Partners/*.png', { eager: true })

// Data untuk Partners
const partners = Object.values(partnerLogos).map((module) => module.default)
</script>

<style scoped>
/* Custom Swiper Container */
.swiper-container {
  width: 100%;
  overflow: hidden;
}
</style>
