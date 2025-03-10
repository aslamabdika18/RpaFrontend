<template>
  <div class="min-h-screen bg-white flex flex-col justify-center items-center">
    <!-- Header Section -->
    <header class="bg-primary text-white py-12 text-center w-full">
      <h1 class="text-4xl font-bold mt-16">Program Kami</h1>
      <p class="mt-4 text-lg">Menjembatani mereka yang berkelebihan dengan yang berkebutuhan</p>
    </header>

    <!-- Program Cards Section -->
    <section class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center max-w-7xl">
      <ProgramCard
        v-for="program in programs"
        :key="program.id"
        :title="program.title"
        :description="program.description"
        :id="program.id"
        :icon="program.icon"
        @open-detail="handleOpenDetail"
      />
    </section>

    <!-- Detail Program Section -->
    <section v-if="selectedProgram" id="detail-section" class="container mx-auto px-4 py-12 max-w-7xl">
      <div class="bg-secondary rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-black">{{ selectedProgram.title }}</h2>
        <p class="mt-4 text-gray-700">{{ selectedProgram.description }}</p>

        <div class="mt-8">
          <h3 class="text-xl font-bold text-black">Detail Program</h3>
          <ul class="mt-4 list-disc list-inside text-gray-700">
            <li v-for="(detail, index) in selectedProgram.details" :key="index">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import ProgramCard from "@/components/ProgramCard.vue";

const selectedProgram = ref(null);

const programs = [
  {
    id: 1,
    title: "Pengurangan Susut dan Sisa Pangan",
    description: "Program ini bertujuan untuk mengurangi food loss dan waste dengan menyelamatkan makanan yang masih layak konsumsi.",
    details: [
      "Mengumpulkan makanan dari restoran, supermarket, dan produsen makanan.",
      "Mendistribusikan makanan kepada masyarakat yang membutuhkan.",
      "Edukasi tentang pentingnya mengurangi pemborosan makanan.",
    ],
    icon: "utensils",
  },
  {
    id: 2,
    title: "Support Petani Lokal",
    description: "Kami mendukung petani lokal dengan berbagai program seperti Farm Tour, Buy or Donate, dan Sharing Session.",
    details: [
      "Farm Tour: Mengunjungi kebun petani lokal.",
      "Buy or Donate: Membeli atau menyumbangkan hasil pertanian.",
      "Sharing Session: Diskusi tentang pertanian berkelanjutan.",
    ],
    icon: "tractor",
  },
  {
    id: 3,
    title: "Gizi Sehat untuk Masyarakat",
    description: "Program ini fokus pada edukasi gizi dan distribusi makanan sehat kepada masyarakat yang membutuhkan.",
    details: [
      "Edukasi gizi untuk ibu hamil dan menyusui.",
      "Distribusi makanan sehat kepada masyarakat prasejahtera.",
      "Kampanye tentang pentingnya makanan bergizi.",
    ],
    icon: "apple-alt",
  },
  {
    id: 4,
    title: "Program Spesial",
    description: "Program khusus seperti RPA Goes to School, Ramadhan Ceria, dan Kurban Hingga Pelosok.",
    details: [
      "RPA Goes to School: Edukasi tentang pertanian dan gizi di sekolah.",
      "Ramadhan Ceria: Berbagi makanan berbuka puasa.",
      "Kurban Hingga Pelosok: Distribusi hewan kurban ke daerah terpencil.",
    ],
    icon: "gift",
  },
];

const handleOpenDetail = (id) => {
  selectedProgram.value = programs.find((p) => p.id === id);

  nextTick(() => {
    const detailSection = document.getElementById("detail-section");
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: "smooth" });
    }
  });
};
</script>
