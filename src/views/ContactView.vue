<template>
  <div
    class="min-h-screen bg-gradient-to-br from-primary via-secondary to-tertiary py-16 flex items-center justify-center"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold text-white drop-shadow-lg text-center mb-6 mt-16">
          Kontak Kami
        </h1>
        <p class="text-xl text-white drop-shadow-lg text-center mb-12">
          Kami ingin mendengar dari Anda! Hubungi kami untuk pertanyaan, kerjasama, atau informasi
          lebih lanjut tentang program-program RPA.
        </p>

        <!-- Contact Information -->
        <!-- <div class="grid md:grid-cols-2 gap-8 mb-12"> -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-primary mb-6">Informasi Kontak</h2>
          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <span class="text-primary text-xl">📍</span>
              <div>
                <p class="font-medium text-gray-700">Alamat</p>
                <p class="text-gray-600">
                  Komplek Anuek Laot Residence, Block D, Nomor 32. Meunasah Papeun, Krueng Barona
                  Jaya, Aceh Besar
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <span class="text-primary text-xl">📱</span>
              <div>
                <p class="font-medium text-gray-700">Telepon</p>
                <p class="text-gray-600">+62 8527 7600 700</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <span class="text-primary text-xl">📧</span>
              <div>
                <p class="font-medium text-gray-700">Email</p>
                <p class="text-gray-600">rumohpanganaceh@gmail.com</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <span class="text-primary text-xl">📷</span>
              <div>
                <p class="font-medium text-gray-700">Instagram</p>
                <p class="text-gray-600">@rumohpanganaceh</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <!-- <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-primary mb-6">Kirim Pesan</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-gray-700 mb-2">Nama</label>
                <input
                  type="text"
                  v-model="name"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  v-model="email"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Pesan</label>
                <textarea
                  v-model="message"
                  rows="4"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full py-3 px-6 bg-tertiary hover:bg-yellow-400 text-white rounded-lg hover:bg-rpa-dark transition-colors duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';

// const name = ref('');
// const email = ref('');
// const message = ref('');

// const submitForm = () => {
//   console.log({ name: name.value, email: email.value, message: message.value });
//   alert('Pesan berhasil dikirim!');
//   name.value = '';
//   email.value = '';
//   message.value = '';
// };
</script>
