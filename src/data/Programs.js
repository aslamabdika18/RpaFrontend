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
    stats: [
      { value: '50+', label: 'Mitra' },
      { value: '10.000+', label: 'Paket Makanan' },
      { value: '5', label: 'Kota' },
      { value: '2020', label: 'Tahun Berdiri' },
    ],
    icon: 'utensils',
    images: [doc1, doc2],
    testimonials: [
      {
        quote:
          'Berkat program ini, keluarga saya bisa mendapatkan makanan bergizi secara rutin. Anak-anak saya sekarang lebih sehat.',
        name: 'Ibu Siti, Penerima Manfaat',
      },
      {
        quote:
          'Sebagai mitra restoran, kami senang bisa berkontribusi mengurangi food waste sekaligus membantu masyarakat.',
        name: 'Bapak Andi, Pemilik Restoran',
      },
    ],
  },
  {
    id: 2,
    title: 'Support Petani Lokal',
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
    stats: [
      { value: '200+', label: 'Petani' },
      { value: '5.000+', label: 'Penerima Manfaat' },
      { value: '15', label: 'Desa' },
      { value: '2021', label: 'Tahun Berdiri' },
    ],
    icon: 'tractor',
    images: [doc3, doc4, doc5, doc6, doc7, doc8],
    testimonials: [
      {
        quote:
          'Dengan adanya program ini, hasil panen saya sekarang memiliki pasar yang pasti dengan harga yang adil.',
        name: 'Bapak Jono, Petani',
      },
      {
        quote:
          'Saya senang bisa mendapatkan sayuran segar langsung dari petani lokal dengan kualitas terbaik.',
        name: 'Ibu Rina, Konsumen',
      },
    ],
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
    stats: [
      { value: '3.000+', label: 'Keluarga' },
      { value: '50+', label: 'Kegiatan' },
      { value: '10', label: 'Posyandu' },
      { value: '2019', label: 'Tahun Berdiri' },
    ],
    icon: 'apple-alt',
    images: [doc9, doc10, doc11],
    testimonials: [
      {
        quote:
          'Anak saya yang sebelumnya sering sakit-sakitan, sekarang lebih sehat setelah mengikuti program edukasi gizi ini.',
        name: 'Ibu Maya, Penerima Manfaat',
      },
    ],
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
    stats: [
      { value: '20+', label: 'Acara' },
      { value: '5.000+', label: 'Penerima' },
      { value: '30', label: 'Sekolah' },
      { value: '2018', label: 'Tahun Berdiri' },
    ],
    icon: 'gift',
    images: [doc12, doc13],
    testimonials: [
      {
        quote:
          'Anak-anak di sekolah kami sangat antusias dengan program edukasi tentang pertanian dan gizi.',
        name: 'Bapak Guru, SDN 01',
      },
    ],
  },
]
