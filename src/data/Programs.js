const PenguranganSusut = import.meta.glob('@/assets/images/PenguranganSusut/*.jpg', {
  eager: true,
})
const SupportPetaniLokal = import.meta.glob('@/assets/images/SupportPetaniLokal/*.jpg', {
  eager: true,
})
const GiziSehat = import.meta.glob('@/assets/images/GiziSehat/*.jpg', { eager: true })
const ProgramSpesial = import.meta.glob('@/assets/images/ProgramSpesial/*.jpg', {
  eager: true,
})
const getImageArray = (imagesObj) => {
  return Object.values(imagesObj).map((module) => module.default)
}

export const programs = [
  {
    id: 1,
    title: 'Pengurangan Susut dan Sisa Pangan',
    description:
      'Program untuk mengurangi food loss dan waste dengan menyelamatkan makanan yang masih layak konsumsi.',
    longDescription:
      'RPA mengumpulkan, menyimpan, dan mendistribusikan makanan kepada kelompok, keluarga dan individu yang membutuhkan, terutama yang mengalami kesulitan ekonomi atau kelaparan. Kami bekerja sama dengan para pendonor dari restoran, supermarket, produsen makanan, petani dan masyarakat umum untuk mengumpulkan makanan yang layak konsumsi kemudian mendistribusikannya kepada lembaga amal, rumah sakit, panti asuhan, atau langsung kepada yang membutuhkan. Kami juga memberikan edukasi tentang STOP boros pangan kepada masyarakat.',
    details: [
      'Food Rescue - penyelamatan makanan yang masih layak konsumsi',
      'Distribusi makanan kepada yang membutuhkan',
      'Kerjasama dengan restoran, supermarket, dan produsen makanan',
      'Edukasi STOP boros pangan di masyarakat',
      'Kegiatan di car free day dan hari pangan dunia',
    ],
    icon: 'utensils',
    images: getImageArray(PenguranganSusut),
  },
  {
    id: 2,
    title: 'Support Petani dan Peternak Lokal',
    description: 'Program untuk mendukung petani lokal dengan berbagai kegiatan pemberdayaan.',
    longDescription:
      'Program ini bertujuan untuk memberdayakan petani kecil dan menengah dengan memberikan mereka akses ke pasar yang lebih luas serta pengetahuan tentang pertanian berkelanjutan. Meliputi Farm Tour & Harvest Tour untuk menghubungkan petani dengan konsumen, Buy or Donate untuk membantu penjualan hasil kebun, Sharing Session untuk edukasi, Tumpang Sari Kacang Koro untuk mengurangi ketergantungan kedelai impor, Bantu Petani Tanyoe dengan sistem CSA, dan HaloTani untuk pendampingan petani.',
    details: [
      'Farm Tour & Harvest Tour - menghubungkan petani dengan konsumen',
      'Buy or Donate - membantu penjualan hasil kebun petani',
      'Sharing Session, Seminar & Workshop tentang pertanian',
      'Tumpang Sari Kacang Koro dengan GAIN',
      'Bantu Petani Tanyoe dengan sistem CSA',
      'HaloTani - program pendampingan petani',
    ],
    icon: 'tractor',
    images: getImageArray(SupportPetaniLokal),
  },
  {
    id: 3,
    title: 'Gizi Sehat untuk Masyarakat',
    description: 'Program edukasi gizi dan distribusi makanan sehat untuk masyarakat membutuhkan.',
    longDescription:
      'Program ini bertujuan memberikan edukasi gizi kepada masyarakat, khususnya ibu hamil dan menyusui untuk mencegah stunting, serta memberikan bantuan makanan sehat dan bergizi. Termasuk Sedekah Sayur dan Buah untuk mendukung petani lokal dan masyarakat membutuhkan, serta Sedekah Makanan dari donator yang disalurkan ke rumah singgah dan panti asuhan.',
    details: [
      'Edukasi Gizi dan Sedekah Pangan untuk ibu hamil/menyusui',
      'Sedekah Sayur dan Buah - mendukung petani lokal',
      'Sedekah Makanan untuk masyarakat membutuhkan',
      'Fokus pada pencegahan stunting',
      'Kerjasama dengan rumah singgah dan panti asuhan',
    ],
    icon: 'apple-alt',
    images: getImageArray(GiziSehat),
  },
  {
    id: 4,
    title: 'Program Spesial',
    description:
      'Program khusus pada momen tertentu seperti Ramadhan, hari raya kurban, dan acara sekolah.',
    longDescription:
      'Program temporer pada momen-momen khusus termasuk RPA Goes to School untuk edukasi di sekolah mitra, Ramadhan Ceria untuk berbagi makanan berbuka puasa, dan Kurban Hingga Pelosok untuk distribusi hewan kurban ke daerah terpencil. Program ini bertujuan menyebarkan kebahagiaan dan membantu mereka yang membutuhkan pada momen spesial.',
    details: [
      'RPA Goes to School - edukasi di sekolah mitra',
      'Ramadhan Ceria - berbagi makanan berbuka puasa',
      'Kurban Hingga Pelosok - distribusi hewan kurban',
      'Kolaborasi dengan masyarakat luas',
      'Fokus pada solidaritas sosial',
    ],
    icon: 'gift',
    images: getImageArray(ProgramSpesial),
  },
]
