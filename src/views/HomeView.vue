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
          <div class="p-8 bg-white rounded-xl shadow-md w-fit mx-auto mb-8">
            <img :src="Logo" alt="RPA Logo" class="mx-auto w-64" />
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
        <p class="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem blanditiis aliquid in
          odit ad officiis eos ea error nisi dolore repellendus officia veritatis sunt facere
          repellat numquam, fuga consequatur. Praesentium qui repudiandae laudantium, at esse,
          voluptatum magni corporis voluptatem sed ipsa nemo sequi. Omnis laudantium quod, beatae
          perspiciatis vero est?
        </p>
      </div>
    </section>

    <!-- Dokumentasi Section -->
  <section class="py-16 bg-grey-100 relative overflow-hidden">
    <div class="container mx-auto px-4 relative">
      <h2 class="text-4xl font-bold text-center text-primary mb-12">Dokumentasi Kami</h2>
      <!-- Swiper Container -->
      <swiper
        :modules="[Autoplay, Navigation, EffectCoverflow]"
        :slides-per-view="3"
        :centered-slides="true"
        :space-between="30"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :effect="'coverflow'"
        :coverflowEffect="{
          rotate: 0,
          stretch: 80,
          depth: 350,
          modifier: 1,
          slideShadows: true,
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

    <!-- Program Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-primary text-center mb-12">Program Kami</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Food Rescue Program -->
          <div
            class="bg-white shadow-xl p-8 rounded-lg flex flex-col items-center justify-center text-center"
          >
            <div class="w-16 h-16 mb-4 text-primary">
              <i class="fa-solid fa-box-open text-4xl"></i>
            </div>
            <h3 class="text-2xl font-semibold text-primary mb-4">Food Rescue</h3>
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
              <i class="fa-solid fa-leaf text-4xl"></i>
            </div>
            <h3 class="text-2xl font-semibold text-primary mb-4">Sedekah Sayur</h3>
            <p class="text-gray-600">
              Program bantuan untuk petani dalam menjual hasil panen dengan harga yang layak.
            </p>
          </div>

          <!-- Sharing Session Program -->
          <div
            class="bg-white shadow-xl p-8 rounded-lg flex flex-col items-center justify-center text-center"
          >
            <div class="w-16 h-16 mb-4 text-primary">
              <i class="far fa-comments text-4xl"></i>
            </div>
            <h3 class="text-2xl font-semibold text-primary mb-4">Sharing Session</h3>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import Logo from '@/assets/logo/logo.png'
import doc1 from '@/assets/images/doc1.png'
import doc2 from '@/assets/images/doc2.png'
import doc3 from '@/assets/images/doc3.png'
import doc4 from '@/assets/images/doc4.png'
import doc5 from '@/assets/images/doc5.png'
import doc6 from '@/assets/images/doc6.png'

const images = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg']
const dokumentasi = [
  { image: doc1, title: 'Kegiatan Food Rescue' },
  { image: doc2, title: 'Distribusi Makanan' },
  { image: doc3, title: 'Edukasi Masyarakat' },
  { image: doc4, title: 'Kegiatan Sosial' },
  { image: doc5, title: 'Pelatihan Masyarakat' },
  { image: doc6, title: 'Bantuan Petani Tanyoe' }
]

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
  intervalId = setInterval(nextImage, 5000) // Ganti gambar setiap 5 detik
})

// Hentikan interval saat komponen di-unmount
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
/* Custom Swiper Navigation Buttons */
.swiper-button-prev,
.swiper-button-next {
  color: white; /* Warna panah */
  background: none; /* Hapus background */
  font-size: 2rem; /* Ukuran panah */
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #fbbf24; /* Warna saat hover */
}

/* Efek untuk slide samping */
.scale-90 {
  transform: scale(0.9);
}

.opacity-80 {
  opacity: 0.8;
}

.scale-100 {
  transform: scale(1);
}

.opacity-100 {
  opacity: 1;
}
</style>
