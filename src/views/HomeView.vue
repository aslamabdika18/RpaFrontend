<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen">
      <div class="absolute inset-0">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
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
          <div class="p-7 bg-white rounded-xl shadow-md w-fit mx-auto mb-8 mt-16">
            <img :src="Logo" alt="RPA Logo" class="mx-auto w-48" />
          </div>
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

    <!-- Apa yang kami lakukan -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-primary mb-12">Apa yang Kami Lakukan?</h2>
        <p class="text-lg text-gray-700 leading-relaxed text-justify max-w-2xl mx-auto">
          Rumoh Pangan Aceh (RPA) berkomitmen untuk meningkatkan ketahanan pangan (food security) di
          Aceh melalui pendekatan berkelanjutan. Kami mendukung petani lokal dalam memproduksi hasil
          pertanian dengan menerapkan sistem pertanian yang berkelanjutan (sustainable agriculture)
          serta membantu mereka mengakses pasar yang adil agar memperoleh harga jual yang layak.
          Selain itu, RPA juga berperan sebagai penghubung antara masyarakat yang memiliki surplus
          makanan dengan mereka yang membutuhkan, guna mengurangi susut dan sisa pangan (food loss
          and waste reduction). Kami juga aktif dalam mengedukasi masyarakat mengenai pentingnya
          konsumsi makanan bergizi serta memastikan akses terhadap makanan sehat dan bernutrisi bagi
          mereka yang membutuhkan.
        </p>
      </div>
    </section>

    <!-- Dokumentasi Section -->
    <section class="py-16 bg-grey-100 relative overflow-hidden">
      <div class="container mx-auto px-4 relative">
        <!-- Swiper Container -->
        <swiper
          :modules="[Autoplay, Navigation, EffectCoverflow]"
          :slides-per-view="2"
          :centered-slides="true"
          :space-between="30"
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
            rotate: 0, // Tidak ada rotasi
            stretch: 0, // Jarak antara slide
            depth: 100, // Kedalaman efek 3D
            modifier: 1, // Modifier untuk mengatur intensitas efek
            slideShadows: false, // Nonaktifkan bayangan
          }"
          class="swiper-container"
        >
          <!-- Slide Items -->
          <swiper-slide v-for="(doc, index) in dokumentasi" :key="index">
            <div class="relative w-full h-96 rounded-lg shadow-xl overflow-hidden">
              <!-- Gambar -->
              <div
                class="w-full h-full bg-cover bg-center"
                :style="`background-image: url(${doc.image})`"
              ></div>
              <!-- Keterangan -->
              <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                <p class="text-lg font-semibold">{{ doc.title }}</p>
              </div>
            </div>
          </swiper-slide>

          <!-- Navigation Buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
    </section>
    <!-- Impact Section -->
    <ImpactCompo />
    <!-- Program Section - Diubah untuk konsistensi -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-primary mb-12">Program Kami</h2>
        <p class="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Menjembatani mereka yang berkelebihan dengan yang berkebutuhan
        </p>

        <!-- Grid Program Cards yang konsisten dengan ProgramsView.vue -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="program in programs"
            :key="program.id"
            class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-[400px]"
          >
            <img
              :src="program.images[0]"
              :alt="program.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 class="text-white text-xl font-bold mb-2">{{ program.title }}</h3>
                <p class="text-gray-200 line-clamp-2">{{ program.description }}</p>
                <router-link
                  :to="`/program/${program.id}`"
                  class="mt-4 inline-block text-white border-b border-transparent hover:border-white transition-all duration-300 font-medium"
                >
                  Pelajari lebih lanjut
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Tombol Lihat Semua Program -->
        <div class="text-center mt-12">
          <router-link
            to="/programs"
            class="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 font-medium"
          >
            Lihat Semua Program
          </router-link>
        </div>
      </div>
    </section>
    <!-- Partnership Section -->
    <PartnersCompo />
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
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import PartnersCompo from '@/components/CompoPartners.vue'
import ImpactCompo from '@/components/CompoImpact.vue'
import Logo from '@/assets/logo/logo.png'
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { programs } from '@/data/Programs.js' // Impor data program yang benar

// Data untuk Hero Section
const images = [image1, image2, image3, image4]
const currentImageIndex = ref(0)
let intervalId = null

// Fungsi untuk mengganti ke gambar berikutnya
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

// Fungsi untuk mengganti ke gambar sebelumnya
const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length
}

// Mulai interval saat komponen dimuat
onMounted(() => {
  intervalId = setInterval(nextImage, 5000)
})

// Hentikan interval saat komponen di-unmount
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

// Impor gambar untuk Hero Section
import image1 from '@/assets/images/1.jpg'
import image2 from '@/assets/images/2.jpg'
import image3 from '@/assets/images/3.jpg'
import image4 from '@/assets/images/4.jpg'

// Impor gambar untuk Dokumentasi
import doc1 from '@/assets/images/doc1.png'
import doc2 from '@/assets/images/doc2.png'
import doc3 from '@/assets/images/doc3.png'
import doc4 from '@/assets/images/doc4.png'
import doc5 from '@/assets/images/doc5.png'
import doc6 from '@/assets/images/doc6.png'

// Data untuk Dokumentasi
const dokumentasi = [
  { image: doc1, title: 'Kegiatan Food Rescue' },
  { image: doc2, title: 'Distribusi Makanan' },
  { image: doc3, title: 'Edukasi Masyarakat' },
  { image: doc4, title: 'Kegiatan Sosial' },
  { image: doc5, title: 'Pelatihan Masyarakat' },
  { image: doc6, title: 'Bantuan Petani Tanyoe' },
]
</script>

<style scoped>
/* Custom Swiper Navigation Buttons */
.swiper-button-prev,
.swiper-button-next {
  color: white;
  background: none;
  font-size: 2rem;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #fbbf24;
}

/* Efek untuk slide samping */
.swiper-slide {
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  opacity: 0.5;
  filter: blur(2px);
}

.swiper-slide-active {
  transform: scale(1);
  opacity: 1;
  filter: blur(0);
}

.swiper-slide-prev,
.swiper-slide-next {
  transform: scale(0.9);
}
</style>
