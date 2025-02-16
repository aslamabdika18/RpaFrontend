<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen">
      <!-- Image Slider with Overlay -->
      <div class="absolute inset-0">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-500"
          :class="{ 'opacity-0': currentImageIndex !== index }"
          :style="`background-image: url(${image})`"
        ></div>
        <!-- Dark Overlay with Green Tint -->
        <div class="absolute inset-0 bg-gradient-to-b from-green-900/60 to-green-800/60"></div>
      </div>

      <!-- Content -->
      <div class="relative h-full flex items-center justify-center">
        <div class="text-center text-white px-4">
          <!-- Logo -->
          <img src="" alt="Logo" class="mx-auto mb-8 w-64">

          <h1 class="text-5xl font-bold mb-6">
            Solusi Pertanian Inovatif untuk Masa Depan
          </h1>
          <p class="text-xl mb-8 max-w-3xl mx-auto">
            Kami mengintegrasikan teknologi canggih dengan prinsip keberlanjutan untuk membantu petani meningkatkan hasil panen mereka dan menjaga lingkungan.
          </p>
          <router-link
            to="/donate"
            class="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300"
          >
            Transform a life
          </router-link>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="prevImage"
        class="absolute top-1/2 left-6 transform -translate-y-1/2 text-white text-4xl hover:text-green-300 transition-colors duration-300 focus:outline-none"
      >
        ←
      </button>
      <button
        @click="nextImage"
        class="absolute top-1/2 right-6 transform -translate-y-1/2 text-white text-4xl hover:text-green-300 transition-colors duration-300 focus:outline-none"
      >
        →
      </button>

      <!-- Social Media Links -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6">
        <a href="#" class="text-white hover:text-green-300 transition-colors duration-300">
          <i class="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" class="text-white hover:text-green-300 transition-colors duration-300">
          <i class="fab fa-linkedin text-2xl"></i>
        </a>
        <a href="#" class="text-white hover:text-green-300 transition-colors duration-300">
          <i class="fab fa-tiktok text-2xl"></i>
        </a>
      </div>
    </section>

    <!-- Fitur Utama -->
    <section class="py-16 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-semibold text-green-700 mb-8">Fitur Kami</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white shadow-xl p-8 rounded-lg">
            <i class="fas fa-leaf text-4xl text-green-700 mb-4"></i>
            <h3 class="text-2xl font-semibold text-green-600 mb-4">Sistem Irigasi Cerdas</h3>
            <p class="text-gray-600">
              Solusi irigasi otomatis dengan teknologi AI yang dapat menghemat penggunaan air dan meningkatkan efisiensi.
            </p>
          </div>
          <!-- Feature 2 -->
          <div class="bg-white shadow-xl p-8 rounded-lg">
            <i class="fas fa-tractor text-4xl text-green-700 mb-4"></i>
            <h3 class="text-2xl font-semibold text-green-600 mb-4">Pemantauan Tanaman</h3>
            <p class="text-gray-600">
              Sistem pemantauan berbasis sensor yang membantu petani memantau kondisi tanaman secara real-time.
            </p>
          </div>
          <!-- Feature 3 -->
          <div class="bg-white shadow-xl p-8 rounded-lg">
            <i class="fas fa-seedling text-4xl text-green-700 mb-4"></i>
            <h3 class="text-2xl font-semibold text-green-600 mb-4">Pertanian Berkelanjutan</h3>
            <p class="text-gray-600">
              Fokus pada penggunaan teknologi yang ramah lingkungan dan berkelanjutan untuk pertanian masa depan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-semibold text-green-700 mb-8">Apa Kata Mereka?</h2>
        <div class="flex flex-col md:flex-row justify-center items-center gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm">
            <p class="text-gray-600 mb-4">“Teknologi ini benar-benar mengubah cara kami bertani. Kami sekarang bisa mengelola air dan sumber daya lainnya dengan lebih efisien.”</p>
            <p class="font-semibold text-green-600">Petani A</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm">
            <p class="text-gray-600 mb-4">“Kami sangat terbantu dengan sistem pemantauan yang bisa menginformasikan kami tentang kondisi tanaman secara langsung.”</p>
            <p class="font-semibold text-green-600">Petani B</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 bg-green-600 text-white text-center">
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold mb-6">Bergabunglah dengan Kami dalam Membangun Pertanian Berkelanjutan</h2>
        <p class="text-lg mb-8">
          Kami mengundang Anda untuk menjadi bagian dari solusi pertanian masa depan yang berkelanjutan dan ramah lingkungan.
        </p>
        <router-link to="/donate" class="inline-block px-8 py-3 text-white bg-green-700 hover:bg-green-800 rounded-lg transition-all duration-300">
          Donasi Sekarang
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Daftar gambar untuk Hero Section
const images = [
  "/images/1.jpg", // Ganti dengan gambar yang sesuai dengan path yang benar
  "/images/2.jpg",
  "/images/3.jpg",
];

// Mengatur index gambar saat ini
const currentImageIndex = ref(0);

// Fungsi untuk mengganti gambar secara otomatis
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

// Fungsi untuk kembali ke gambar sebelumnya
const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
};

// Interval otomatis untuk mengganti gambar setiap 5 detik
setInterval(nextImage, 3000);
</script>

<style scoped>
/* Styling tambahan jika diperlukan */
</style>
