<template>
  <div class="min-h-screen bg-grey-100">
    <!-- Header Section -->
    <div class="bg-primary text-white py-12 text-center">
      <h1 class="text-4xl font-bold mt-16">Program Kami</h1>
      <p class="mt-4 text-lg">Menjembatani mereka yang berkelebihan dengan yang berkebutuhan</p>
    </div>

    <!-- Program Cards Section -->
    <div class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-7xl">
      <!-- Card 1: Pengurangan Susut dan Sisa Pangan -->
      <ProgramCard
        title="Pengurangan Susut dan Sisa Pangan"
        description="Program ini bertujuan untuk mengurangi food loss dan waste dengan menyelamatkan makanan yang masih layak konsumsi."
        :id="1"
        @open-detail="handleOpenDetail"
      />

      <!-- Card 2: Support Petani Lokal -->
      <ProgramCard
        title="Support Petani Lokal"
        description="Kami mendukung petani lokal dengan berbagai program seperti Farm Tour, Buy or Donate, dan Sharing Session."
        :id="2"
        @open-detail="handleOpenDetail"
      />

      <!-- Card 3: Gizi Sehat untuk Masyarakat -->
      <ProgramCard
        title="Gizi Sehat untuk Masyarakat"
        description="Program ini fokus pada edukasi gizi dan distribusi makanan sehat kepada masyarakat yang membutuhkan."
        :id="3"
        @open-detail="handleOpenDetail"
      />

      <!-- Card 4: Program Spesial -->
      <ProgramCard
        title="Program Spesial"
        description="Program khusus seperti RPA Goes to School, Ramadhan Ceria, dan Kurban Hingga Pelosok."
        :id="4"
        @open-detail="handleOpenDetail"
      />
    </div>

    <!-- Detail Program Section -->
    <div v-if="selectedProgram" class="container mx-auto px-4 py-12 max-w-7xl">
      <div class="bg-secondary rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-black">{{ selectedProgram.title }}</h2>
        <p class="mt-4 text-gray-700">{{ selectedProgram.description }}</p>

        <!-- Additional Details -->
        <div class="mt-8">
          <h3 class="text-xl font-bold text-black">Detail Program</h3>
          <ul class="mt-4 list-disc list-inside text-gray-700">
            <li v-for="(detail, index) in selectedProgram.details" :key="index">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 py-12 max-w-7xl">
    <CompoImpact />
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProgramCard from "@/components/ProgramCard.vue";
import CompoImpact from "@/components/CompoImpact.vue";

// State untuk program yang dipilih
const selectedProgram = ref(null);

// Data program (contoh statis, bisa diganti dengan API call)
const programs = [
  {
    id: 1,
    title: "Pengurangan Susut dan Sisa Pangan",
    description:
      "Program ini bertujuan untuk mengurangi food loss dan waste dengan menyelamatkan makanan yang masih layak konsumsi.",
    details: [
      "Mengumpulkan makanan dari restoran, supermarket, dan produsen makanan.",
      "Mendistribusikan makanan kepada masyarakat yang membutuhkan.",
      "Edukasi tentang pentingnya mengurangi pemborosan makanan.",
    ],
  },
  {
    id: 2,
    title: "Support Petani Lokal",
    description:
      "Kami mendukung petani lokal dengan berbagai program seperti Farm Tour, Buy or Donate, dan Sharing Session.",
    details: [
      "Farm Tour: Mengunjungi kebun petani lokal.",
      "Buy or Donate: Membeli atau menyumbangkan hasil pertanian.",
      "Sharing Session: Diskusi tentang pertanian berkelanjutan.",
    ],
  },
  {
    id: 3,
    title: "Gizi Sehat untuk Masyarakat",
    description:
      "Program ini fokus pada edukasi gizi dan distribusi makanan sehat kepada masyarakat yang membutuhkan.",
    details: [
      "Edukasi gizi untuk ibu hamil dan menyusui.",
      "Distribusi makanan sehat kepada masyarakat prasejahtera.",
      "Kampanye tentang pentingnya makanan bergizi.",
    ],
  },
  {
    id: 4,
    title: "Program Spesial",
    description:
      "Program khusus seperti RPA Goes to School, Ramadhan Ceria, dan Kurban Hingga Pelosok.",
    details: [
      "RPA Goes to School: Edukasi tentang pertanian dan gizi di sekolah.",
      "Ramadhan Ceria: Berbagi makanan berbuka puasa.",
      "Kurban Hingga Pelosok: Distribusi hewan kurban ke daerah terpencil.",
    ],
  },
];

// Method untuk menampilkan detail program
const handleOpenDetail = (id) => {
  selectedProgram.value = programs.find((p) => p.id === id);
};
</script>

<style scoped>
/* Custom styles can be added here if needed */
</style>
