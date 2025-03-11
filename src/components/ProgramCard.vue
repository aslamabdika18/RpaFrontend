<template>
  <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col min-h-96">
    <!-- Bagian atas card (ikon, judul, dan deskripsi) -->
    <div class="flex flex-col items-center text-center flex-grow">
      <!-- Ikon -->
      <i :class="`fas fa-${icon} text-4xl text-primary mb-4`"></i> <!-- Ikon di atas, dengan margin-bottom -->
      <!-- Judul -->
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <!-- Deskripsi -->
      <p class="mt-4 text-gray-700">{{ description }}</p>
    </div>

    <!-- Detail program (muncul ketika tombol Detail diklik) -->
    <div v-if="showDetails" class="mt-6 mb-6">
      <h4 class="text-lg font-bold text-black">Detail Program</h4>
      <ul class="mt-2 list-disc list-inside text-gray-700">
        <li v-for="(detail, index) in details" :key="index">
          {{ detail }}
        </li>
      </ul>
    </div>

    <!-- Tombol Detail -->
    <div class="mt-auto flex justify-center">
      <button
        @click="toggleDetail"
        class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition duration-300"
      >
        {{ showDetails ? "Tutup Detail" : "Detail" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props yang diterima oleh komponen
defineProps({
  title: String,
  description: String,
  details: Array,
  icon: String,
});

// State untuk menampilkan detail program
const showDetails = ref(false);

// Fungsi untuk toggle detail program
const toggleDetail = () => {
  showDetails.value = !showDetails.value;
};
</script>
