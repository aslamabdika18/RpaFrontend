<template>
  <div class="min-h-screen bg-gradient-to-b from-secondary to-white py-16">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 mt-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Tentang Kami</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Rumoh Pangan Aceh (RPA) adalah sebuah lembaga yang bergerak di bidang sosial untuk membantu mengurangi kesenjangan pangan di masyarakat Aceh.
        </p>
      </div>

      <!-- Vision & Mission -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
          <h2 class="text-2xl font-bold text-primary mb-4">Visi</h2>
          <p class="text-gray-600 leading-relaxed">
            Menciptakan komunitas di mana setiap orang mempunyai akses terhadap makanan yang cukup dan bergizi dengan mengedepankan keberlanjutan sosial dan lingkungan.
          </p>
        </div>
        <div class="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
          <h2 class="text-2xl font-bold text-primary mb-4">Misi</h2>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              Mengurangi kesenjangan pangan di masyarakat Aceh
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              Memberikan edukasi kepada masyarakat tentang makanan sehat dan bergizi
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              Memberikan program pengembangan untuk peningkatan kesejahteraan petani, nelayan, peternak dan usaha kecil
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              Mengurangi sampah makanan dan meningkatkan efisiensi penggunaan sumber daya pangan
            </li>
          </ul>
        </div>
      </div>

      <!-- Programs -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-secondary text-center mb-8">Program Kami</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="bg-primary h-2"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-primary mb-3">Food Rescue</h3>
              <p class="text-gray-600">Upaya penyelamatan surplus makanan dari industri makanan untuk dibagikan kepada masyarakat pra-sejahtera di Banda Aceh.</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="bg-primary h-2"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-primary mb-3">Sedekah Sayur</h3>
              <p class="text-gray-600">Program membantu petani dalam menjual hasil panennya dengan harga yang layak dan membagikannya kepada masyarakat yang membutuhkan.</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="bg-primary h-2"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-primary mb-3">Sharing Session</h3>
              <p class="text-gray-600">Edukasi dan diskusi dengan para ahli tentang pertanian, ketahanan pangan, dan pembangunan networking.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-primary text-center mb-8">Hubungi Kami</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div class="space-y-2">
            <div class="text-primary text-2xl mb-2">📱</div>
            <p class="font-medium text-gray-700">Telepon</p>
            <p class="text-gray-600">+62 8527 7600 700</p>
          </div>
          <div class="space-y-2">
            <div class="text-primary text-2xl mb-2">📧</div>
            <p class="font-medium text-gray-700">Email</p>
            <p class="text-gray-600">rumohpanganaceh@gmail.com</p>
          </div>
          <div class="space-y-2">
            <div class="text-primary text-2xl mb-2">📍</div>
            <p class="font-medium text-gray-700">Alamat</p>
            <p class="text-gray-600">Komplek Anuek Laot Residence, Block D, No. 32</p>
          </div>
          <div class="space-y-2">
            <div class="text-primary text-2xl mb-2">📷</div>
            <p class="font-medium text-gray-700">Instagram</p>
            <p class="text-gray-600">@rumohpanganaceh</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
