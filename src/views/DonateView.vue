<template>
  <div class="min-h-screen bg-gradient-to-b from-green-700 to-green-800 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <!-- Header Section -->
        <h1 class="text-4xl font-bold text-white mb-4 text-center">Donate</h1>
        <p class="text-xl text-white mb-8 text-center">
          Silakan transfer ke salah satu rekening dibawah ini
        </p>

        <!-- Payment Methods Tabs -->
        <div class="bg-white rounded-lg shadow-lg mb-8">
          <div class="grid grid-cols-2 gap-4 p-4">
            <button
              @click="activeMethod = 'transfer'"
              :class="[
                'py-2 px-4 rounded-lg transition-colors duration-300',
                activeMethod === 'transfer'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              Bank Transfer
            </button>
            <button
              @click="activeMethod = 'qr'"
              :class="[
                'py-2 px-4 rounded-lg transition-colors duration-300',
                activeMethod === 'qr'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              QRIS
            </button>
          </div>
        </div>

        <!-- Bank Transfer Section -->
        <div v-if="activeMethod === 'transfer'" class="space-y-6">
          <!-- Bank Cards Grid -->
          <div class="grid gap-6 mb-8">
            <!-- BCA -->
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="font-bold text-xl text-green-700">BCA</div>
                <span class="text-sm text-gray-500">Bank Transfer</span>
              </div>
              <div class="space-y-2">
                <p class="font-medium text-green-700">No. Rekening:</p>
                <div class="flex items-center justify-between bg-gray-50 p-3 rounded">
                  <span class="text-lg font-semibold text-green-800">1234567890</span>
                  <button @click="copyToClipboard('1234567890')" class="text-green-600 hover:text-green-700">
                    Salin
                  </button>
                </div>
                <p class="text-green-700">a.n. RPA</p>
              </div>
            </div>

            <!-- Mandiri -->
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="font-bold text-xl text-green-700">Mandiri</div>
                <span class="text-sm text-gray-500">Bank Transfer</span>
              </div>
              <div class="space-y-2">
                <p class="font-medium text-green-700">No. Rekening:</p>
                <div class="flex items-center justify-between bg-gray-50 p-3 rounded">
                  <span class="text-lg font-semibold text-green-800">0987654321</span>
                  <button @click="copyToClipboard('0987654321')" class="text-green-600 hover:text-green-700">
                    Salin
                  </button>
                </div>
                <p class="text-green-700">a.n. RPA</p>
              </div>
            </div>
          </div>
        </div>

        <!-- QR Code Section -->
        <div v-if="activeMethod === 'qr'" class="space-y-6">
          <!-- QRIS -->
          <div class="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 class="text-xl font-bold text-green-700 mb-4">QRIS</h3>
            <div class="flex justify-center mb-4">
              <img
                src=""
                alt="QRIS Code"
                class="w-64 h-64 border-2 border-gray-200 rounded-lg"
              />
            </div>
            <p class="text-gray-600 mb-2">Scan QR code menggunakan aplikasi e-wallet atau m-banking Anda</p>
            <p class="text-green-700 font-medium">a.n. RPA</p>
          </div>
        </div>

        <!-- Instructions -->
        <div class="bg-white rounded-lg shadow-lg p-6 mb-8 mt-6">
          <h2 class="text-xl font-semibold text-green-700 mb-4">Tata Cara Transfer:</h2>
          <ol class="list-decimal ml-4 space-y-3 text-green-700">
            <li v-if="activeMethod === 'transfer'">Pilih salah satu bank diatas</li>
            <li v-if="activeMethod === 'transfer'">Salin nomor rekening yang dituju</li>
            <li v-if="activeMethod === 'qr'">Scan QR Code menggunakan aplikasi pembayaran Anda</li>
            <li>Lakukan transfer sesuai nominal yang diinginkan</li>
            <li>Simpan bukti transfer</li>
            <li>Konfirmasi donasi melalui WhatsApp dengan mengirimkan bukti transfer</li>
          </ol>
        </div>

        <!-- WhatsApp Button -->
        <div class="text-center">
          <a
            href="https://wa.me/your-number"
            target="_blank"
            class="inline-block px-8 py-4 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300"
          >
            Konfirmasi via WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeMethod = ref('transfer');

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('Nomor rekening berhasil disalin!');
  } catch {
    alert('Gagal menyalin nomor rekening');
  }
};
</script>
