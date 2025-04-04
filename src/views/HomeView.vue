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
    <section class="py-12 md:py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <!-- Judul dengan responsive font size -->
          <h2 class="text-3xl sm:text-4xl font-bold text-center text-primary mb-8 sm:mb-12">
            Apa yang Kami Lakukan?
          </h2>

          <!-- Teks dengan penyesuaian responsive -->
          <div class="px-4 sm:px-0">
            <p
              class="text-base sm:text-lg text-gray-700 leading-relaxed sm:leading-loose text-justify"
            >
              Rumoh Pangan Aceh (RPA) berkomitmen untuk meningkatkan ketahanan pangan (food
              security) di Aceh melalui pendekatan berkelanjutan. Kami mendukung petani lokal dalam
              memproduksi hasil pertanian dengan menerapkan sistem pertanian yang berkelanjutan
              (sustainable agriculture) serta membantu mereka mengakses pasar yang adil agar
              memperoleh harga jual yang layak.
              <span class="hidden sm:inline"><br /><br /></span>
              <!-- Line break hanya di desktop -->
              Selain itu, RPA juga berperan sebagai penghubung antara masyarakat yang memiliki
              surplus makanan dengan mereka yang membutuhkan, guna mengurangi susut dan sisa pangan
              (food loss and waste reduction). Kami juga aktif dalam mengedukasi masyarakat mengenai
              pentingnya konsumsi makanan bergizi serta memastikan akses terhadap makanan sehat dan
              bernutrisi bagi mereka yang membutuhkan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Dokumentasi Section -->
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
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
            >
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
import { programs } from '@/data/programs'

// Import all documentation images
import doc1 from '@/assets/images/doc1.png'
import doc2 from '@/assets/images/doc2.png'
import doc3 from '@/assets/images/doc3.png'
import doc4 from '@/assets/images/doc4.png'
import doc5 from '@/assets/images/doc5.png'
import doc6 from '@/assets/images/doc6.png'
import doc7 from '@/assets/images/doc7.png'
import doc8 from '@/assets/images/doc8.png'
import doc9 from '@/assets/images/doc9.png'
import doc10 from '@/assets/images/doc10.png'
import doc11 from '@/assets/images/doc11.png'
import doc12 from '@/assets/images/doc12.png'
import doc13 from '@/assets/images/doc13.png'

// Use documentation images for hero section
const images = [doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9, doc10, doc11, doc12, doc13]

const currentImageIndex = ref(0)
let intervalId = null

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length
}

onMounted(() => {
  intervalId = setInterval(nextImage, 5000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

// Data untuk Dokumentasi
const dokumentasi = [
  { image: doc1, title: 'Kegiatan Food Rescue' },
  { image: doc2, title: 'Distribusi Makanan' },
  { image: doc3, title: 'Harvest Tour kebun melon petan mitra' },
  { image: doc4, title: 'Kegiatan Sosial' },
  { image: doc5, title: 'Seminar international pertanian regeneratif dan food security' },
  { image: doc6, title: 'Bantuan Petani Tanyoe' },
]
</script>

<!-- Rest of your styles remain the same -->
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
