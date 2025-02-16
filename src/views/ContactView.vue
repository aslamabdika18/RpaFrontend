<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold text-green-700 mb-6">Kontak Kami</h1>
      <p class="text-lg text-gray-600 mb-8">
        Kami ingin mendengar dari Anda! Apakah Anda memiliki pertanyaan, komentar, atau ingin bekerja sama dengan kami? Jangan ragu untuk menghubungi kami.
      </p>
      <form @submit.prevent="submitForm" class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div class="mb-6">
          <input
            type="text"
            v-model="name"
            placeholder="Nama Anda"
            class="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div class="mb-6">
          <input
            type="email"
            v-model="email"
            placeholder="Email Anda"
            class="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div class="mb-6">
          <textarea
            v-model="message"
            placeholder="Pesan Anda"
            class="w-full p-3 border border-gray-300 rounded-lg"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  // Handle form submission logic here (e.g., send data to an API or email)
  console.log({ name: name.value, email: email.value, message: message.value });
  alert('Pesan berhasil dikirim!');
};
</script>

<style scoped>
/* Custom styles for contact page */
</style>
