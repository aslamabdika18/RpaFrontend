<template>
  <div class="bg-gradient-to-t from-primary via-secondary to-tertiary">
    <!-- Header Section -->
    <div class="text-center text-white px-4 pt-24">
      <h2 class="text-3xl font-bold text-white mb-4 uppercase drop-shadow-lg">Dokumentasi</h2>
    </div>

    <!-- Dokumentasi Section -->
    <section class="py-16 bg-grey-100 relative overflow-hidden">
      <div class="container mx-auto px-4 relative">
        <!-- Swiper Container -->
        <swiper
          :modules="[Autoplay, Navigation, EffectCoverflow]"
          :slides-per-view="1"
          :centered-slides="true"
          :space-between="20"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :effect="'coverflow'"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }"
          :breakpoints="{
            // Ketika lebar layar >= 640px
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            // Ketika lebar layar >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            // Ketika lebar layar >= 1024px
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
              coverflowEffect: {
                depth: 150,
              },
            },
          }"
          class="swiper-container"
        >
          <!-- Slide Items -->
          <swiper-slide v-for="(doc, index) in dokumentasi" :key="index">
            <div class="relative w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
              <!-- Gambar -->
              <div
                class="w-full h-full bg-cover bg-center"
                :style="`background-image: url(${doc.image})`"
              ></div>
              <!-- Keterangan -->
              <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                <p class="text-sm sm:text-base md:text-lg font-semibold">{{ doc.title }}</p>
              </div>
            </div>
          </swiper-slide>

          <!-- Navigation Buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
    </section>

    <!-- Partners Section -->
    <CompoPartners />
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules'
import CompoPartners from '@/components/CompoPartners.vue'

// Impor gambar untuk Dokumentasi
import doc1 from '@/assets/images/doc1.png'
import doc2 from '@/assets/images/doc2.png'
import doc3 from '@/assets/images/doc3.png'
import doc4 from '@/assets/images/doc4.png'
import doc5 from '@/assets/images/doc5.png'
import doc6 from '@/assets/images/doc6.png'

const dokumentasi = [
{ image: doc1, title: 'Kegiatan Food Rescue' },
  { image: doc2, title: 'Distribusi Makanan' },
  { image: doc3, title: 'Harvest Tour kebun melon petan mitra' },
  { image: doc4, title: 'Kegiatan Sosial' },
  { image: doc5, title: 'Seminar international pertanian regeneratif dan food security' },
  { image: doc6, title: 'Bantuan Petani Tanyoe' },
]
</script>
<style scoped>
.swiper-slide {
  transition: filter 0.3s ease;
}

.swiper-slide:not(.swiper-slide-active) {
  filter: blur(4px); /* Efek blur */
  opacity: 0.7; /* Optional: mengurangi opacity untuk efek tambahan */
}
</style>
