<template>
  <!-- Impact Section -->
  <section class="py-16 px-10 bg-white rounded-lg shadow-lg">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-primary mb-12">Our Impact</h2>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Card 3: Kegiatan Sosial -->
        <div
          @click="setActiveChart('ternak')"
          class="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-50 transition-colors duration-300"
          :class="{ 'border-2 border-primary': activeChart === 'ternak' }"
        >
          <h3 class="text-2xl font-semibold text-primary mb-4">100+</h3>
          <p class="text-gray-600">petani, peternak dan umkm kecil menjadi mitra</p>
        </div>
        <!-- Card 1: Makanan Diselamatkan -->
        <div
          @click="setActiveChart('food')"
          class="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-50 transition-colors duration-300"
          :class="{ 'border-2 border-primary': activeChart === 'food' }"
        >
          <h3 class="text-2xl font-semibold text-primary mb-4">⁠4 ton+</h3>
          <p class="text-gray-600">Makanan Diselamatkan</p>
        </div>

        <!-- Card 2: Keluarga Terbantu -->
        <div
          @click="setActiveChart('family')"
          class="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-50 transition-colors duration-300"
          :class="{ 'border-2 border-primary': activeChart === 'family' }"
        >
          <h3 class="text-2xl font-semibold text-primary mb-4">5,000+</h3>
          <p class="text-gray-600">keluarga prasejahtera terbantu</p>
        </div>
        <div
          @click="setActiveChart('social')"
          class="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-50 transition-colors duration-300"
          :class="{ 'border-2 border-primary': activeChart === 'social' }"
        >
          <h3 class="text-2xl font-semibold text-primary mb-4">100+</h3>
          <p class="text-gray-600">program sosial terlaksana</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// State untuk menyimpan grafik yang aktif
const activeChart = ref('food') // Default: Makanan Diselamatkan

// Fungsi untuk mengubah grafik yang aktif
const setActiveChart = (chartType) => {
  activeChart.value = chartType
}
</script>

<style>
/* Custom CSS untuk chart container */
.chart-container {
  height: 300px; /* Sesuaikan tinggi chart */
}
</style>
