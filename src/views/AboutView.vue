<template>
  <div class="min-h-screen bg-gradient-to-b from-secondary to-white py-8 md:py-16">
    <!-- Hero Section -->
    <h1
      class="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 mt-8 md:mt-16"
    >
      Tentang Kami
    </h1>
    <div class="container mx-auto px-4">
      <!-- Sejarah Section -->
      <div class="text-center mb-8 md:mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 class="text-xl md:text-2xl font-bold text-primary mb-4">Sejarah Rumoh Pangan Aceh</h2>
        <p
          class="text-base md:text-lg text-justify normal-case text-gray-600 max-w-5xl mx-auto leading-relaxed"
        >
          {{ sejarah }}
        </p>
      </div>

      <!-- Vision & Mission -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
        <VisionMissionCard :title="visionTitle" :content="visionContent" />
        <VisionMissionCard :title="missionTitle" :content="missionContent" />
      </div>

      <!-- SDGs Priority Section -->
      <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 md:mb-16">
        <h2 class="text-xl md:text-2xl font-bold text-primary mb-6">SDGs Priority</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SDGCard
            v-for="(sdg, index) in sdgItems"
            :key="index"
            :icon="sdg.icon"
            :title="sdg.title"
            :description="sdg.description"
          />
        </div>
      </div>

      <!-- Legalitas Section -->
      <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 md:mb-16">
        <h2 class="text-xl md:text-2xl font-bold text-primary mb-6">Legalitas</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <LegalitasCard
            v-for="(legal, index) in legalItems"
            :key="index"
            :icon="legal.icon"
            :title="legal.title"
            :description="legal.description"
          />
        </div>
      </div>

      <!-- Contact Section -->
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VisionMissionCard from '@/components/VisionMissionCard.vue'
import SDGCard from '@/components/SDGCard.vue'
import LegalitasCard from '@/components/LegalitasCard.vue'
import ContactSection from '@/components/ContactSection.vue'

// Import gambar SDG
import sdg1 from '@/assets/sdg/1.png'
import sdg2 from '@/assets/sdg/2.png'
import sdg3 from '@/assets/sdg/3.png'
import sdg4 from '@/assets/sdg/4.png'
import sdg5 from '@/assets/sdg/5.png'

// Data untuk Sejarah
const sejarah = ref(
  'Rumoh Pangan Aceh (RPA) berawal dari inspirasi yang didapat oleh Rivan Rinaldi saat mengikuti program Young Southeast Asian Leaders Initiative Professional Fellows Program (YSEALI PFP) di Amerika Serikat pada tahun 2024. Dalam program tersebut, Rivan belajar tentang sistem pertanian berkelanjutan, khususnya di Farm Alliance of Baltimore, sebuah lembaga non-profit yang fokus pada pemberdayaan petani kota dengan pendekatan urban farming dan pertanian regeneratif yang ramah lingkungan. Selain itu, Rivan juga bekerja sebagai Volunteer di Waverly Farmers Market (32nd Street Farmers Market) Kota Baltimore, dia juga belajar dan mengetahui tentang peran penting Food Bank yang menjalankan program food rescue dan program food donation dengan membantu membeli hasil panen mereka, terutama yang tergolong off-grade atau tidak memenuhi standar pasar. Dari pengalaman tersebut, Rivan menyaksikan bagaimana keberadaan food bank dapat meningkatkan pendapatan petani hingga 50% dan menyadari pentingnya akses pasar yang lebih baik bagi petani lokal. Kembali ke Aceh pada 3 Juni 2024, Rivan bersama teman-temannya, seperti Andri Munazar, Fauzi Arja, Muhammad Haikal, dan Putri Handika, langsung mengeksekusi ide untuk mendirikan sebuah lembaga yang fokus pada pertanian berkelanjutan dan pemberdayaan petani lokal. Mereka mengadakan pertemuan dengan tokoh-tokoh Diaspora Global Aceh, termasuk Pak Mustafa Abubakar, Pak Adron Yusuf, Ibu Cut Soraya, Pak Hardianto, Pak Yarmen, Ust Amri Fathmi, Pak Said Mustafa, pak Yustra Iwata Alsa. Ibu Siti Rahmah dan Ibu Rama Herawati , untuk meminta dukungan dan masukan. Hasil dari pertemuan tersebut, lahirlah Rumoh Pangan Aceh pada hari yang sama, dengan tujuan untuk menciptakan sistem pangan yang lebih inklusif, ramah lingkungan, dan berkelanjutan di Aceh.',
)

// Data untuk Visi dan Misi
const visionTitle = ref('Visi')
const visionContent = ref(
  'Menciptakan komunitas di mana setiap orang mempunyai akses terhadap makanan yang cukup dan bergizi dengan mengedepankan keberlanjutan sosial dan lingkungan.',
)

const missionTitle = ref('Misi')
const missionContent = ref([
  'Mengurangi kesenjangan pangan di masyarakat Aceh. RPA berperan sebagai penghubung antara masyarakat yang memiliki surplus makanan dengan mereka yang membutuhkan.',
  'Memberikan edukasi kepada masyarakat tentang makanan sehat dan bergizi dalam mengatasi permasalahan stunting dan gizi buruk lainnya di Aceh.',
  'Memberikan program pengembangan untuk peningkatan kesejahteraan petani, nelayan, peternak dan usaha kecil lainnya di Aceh.',
  'Mengurangi sampah makanan, berdampak positif bagi lingkungan dan meningkatkan efisiensi penggunaan sumber daya pangan.',
])

// Data untuk SDGs
const sdgItems = ref([
  {
    icon: sdg1,
    title: 'Mengakhiri Kelaparan',
    description:
      'Mencapai ketahanan pangan, meningkatkan nutrisi, dan menurunkan angka stunting serta mendorong pertanian berkelanjutan.',
  },
  {
    icon: sdg2,
    title: 'Kesehatan dan Kesejahteraan',
    description:
      'Pemenuhan kesehatan dan kesejahteraan masyarakat melalui akses makanan sehat dan bergizi.',
  },
  {
    icon: sdg4,
    title: 'Pola Produksi dan Konsumsi Bertanggung Jawab',
    description:
      'Upaya mengurangi sampah dan kehilangan pangan yang berdampak pada emisi gas rumah kaca.',
  },
  {
    icon: sdg3,
    title: 'Membantu Petani dan UMKM',
    description: 'Membantu petani, peternak, dan UMKM Aceh untuk bertumbuh dan berkembang.',
  },
  {
    icon: sdg5,
    title: 'Mengurangi Sampah Makanan',
    description:
      'Mengurangi susut dan sisa pangan untuk meningkatkan efisiensi penggunaan sumber daya pangan.',
  },
])

// Data untuk Legalitas
const legalItems = ref([
  {
    icon: ['fas', 'file-contract'],
    title: 'Akta Notaris',
    description:
      'Akta Notaris YASIR ARFAN S.T., S.H., M.Kn. dengan Nomor Pendaftaran 5024100311100173.',
  },
  {
    icon: ['fas', 'balance-scale'],
    title: 'Keputusan Menteri Hukum dan HAM',
    description:
      'Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia tanggal 03 Oktober 2024, nomor AHU-0024689.AH.01.12.Tahun 2024.',
  },
  {
    icon: ['fas', 'landmark'],
    title: 'Yayasan Rumoh Pangan Aceh',
    description:
      'Yayasan Rumoh Pangan Aceh berdiri sejak Juni 2024, bergerak di bidang sosial, kemanusiaan, lingkungan, dan keagamaan.',
  },
])
</script>
