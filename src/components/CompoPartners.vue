<template>
  <!-- Section Partners -->
  <section class="py-8 md:py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-4xl font-bold text-center text-primary mb-8 md:mb-12">Our Partners</h2>

      <!-- Swiper Container Baris Atas -->
      <swiper
        :modules="[Autoplay]"
        :slides-per-view="'auto'"
        :space-between="20"
        :loop="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :speed="5000"
        :breakpoints="breakpoints"
        class="swiper-container mb-6 md:mb-8"
      >
        <!-- Slide Items -->
        <swiper-slide v-for="(logo, index) in partners" :key="index" class="!w-auto">
          <img :src="logo" alt="Partner Logo" class="h-12 md:h-16 lg:h-20 w-auto mx-auto" />
        </swiper-slide>
      </swiper>

      <!-- Swiper Container Baris Bawah -->
      <swiper
        :modules="[Autoplay]"
        :slides-per-view="'auto'"
        :space-between="20"
        :loop="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }"
        :speed="5000"
        :breakpoints="breakpoints"
        class="swiper-container"
      >
        <!-- Slide Items -->
        <swiper-slide v-for="(logo, index) in partners" :key="index" class="!w-auto">
          <img :src="logo" alt="Partner Logo" class="h-12 md:h-16 lg:h-20 w-auto mx-auto" />
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

// Breakpoints for responsive swiper
const breakpoints = {
  // when window width is >= 320px
  320: {
    slidesPerView: 2,
    spaceBetween: 10
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3,
    spaceBetween: 15
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 4,
    spaceBetween: 20
  },
  // when window width is >= 768px
  768: {
    slidesPerView: 5,
    spaceBetween: 20
  },
  // when window width is >= 1024px
  1024: {
    slidesPerView: 6,
    spaceBetween: 20
  }
}
</script>

<style scoped>
/* Custom Swiper Container */
.swiper-container {
  width: 100%;
  overflow: hidden;
}

/* Optional: Adjust slide width for better responsiveness */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
