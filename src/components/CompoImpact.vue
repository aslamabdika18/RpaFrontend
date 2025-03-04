<template>
  <!-- Impact Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-primary mb-12">Our Impact</h2>

      <!-- Line Chart -->
      <div class="bg-white p-20 rounded-lg shadow-md mb-8 mx-auto md:mx-64 md:p-12">
        <Line :data="activeChartData" :options="lineChartOptions" />
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1: Makanan Diselamatkan -->
        <div
          @click="setActiveChart('food')"
          class="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-50 transition-colors duration-300"
          :class="{ 'border-2 border-primary': activeChart === 'food' }"
        >
          <h3 class="text-2xl font-semibold text-primary mb-4">10,000+</h3>
          <p class="text-gray-600">Makanan Diselamatkan</p>
        </div>

        <!-- Card 2: Keluarga Terbantu -->
        <div
          @click="setActiveChart('family')"
          class="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-50 transition-colors duration-300"
          :class="{ 'border-2 border-primary': activeChart === 'family' }"
        >
          <h3 class="text-2xl font-semibold text-primary mb-4">5,000+</h3>
          <p class="text-gray-600">Keluarga Terbantu</p>
        </div>

        <!-- Card 3: Kegiatan Sosial -->
        <div
          @click="setActiveChart('social')"
          class="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-50 transition-colors duration-300"
          :class="{ 'border-2 border-primary': activeChart === 'social' }"
        >
          <h3 class="text-2xl font-semibold text-primary mb-4">100+</h3>
          <p class="text-gray-600">Kegiatan Sosial</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

// State untuk menyimpan grafik yang aktif
const activeChart = ref('food'); // Default: Makanan Diselamatkan

// Data untuk setiap grafik
const chartData = {
  food: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Makanan Diselamatkan',
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
        data: [500, 1000, 1500, 2000, 2500, 3000, 3500],
      },
    ],
  },
  family: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Keluarga Terbantu',
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
        data: [200, 400, 600, 800, 1000, 1200, 1400],
      },
    ],
  },
  social: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Kegiatan Sosial',
        backgroundColor: '#FFC107',
        borderColor: '#FFC107',
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
  },
};

// Data grafik yang aktif
const activeChartData = ref(chartData[activeChart.value]);

// Options untuk Line Chart
const lineChartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Perkembangan Dampak Kami',
    },
  },
});

// Fungsi untuk mengubah grafik yang aktif
const setActiveChart = (chartType) => {
  activeChart.value = chartType;
  activeChartData.value = chartData[chartType];
};
</script>

<style>
/* Custom CSS untuk chart container */
.chart-container {
  height: 300px; /* Sesuaikan tinggi chart */
}
</style>
