<template>
  <div class="min-h-screen bg-gradient-to-br from-primary via-secondary to-tertiary py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-12 mt-16">
          <h1 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">Donasi untuk Kebaikan</h1>
          <p class="text-xl text-white mb-8 drop-shadow">
            Pilih metode pembayaran yang Anda inginkan
          </p>
        </div>

        <!-- Main Content -->
        <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl mb-8 p-6">
          <!-- Payment Method Tabs -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <button
              @click="activeMethod = 'transfer'"
              :class="[
                'flex items-center justify-center gap-2 py-3 px-6 rounded-xl transition-all duration-300',
                activeMethod === 'transfer'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
              ]"
            >
              <i class="fas fa-credit-card text-lg"></i>
              Bank Transfer
            </button>
            <button
              @click="activeMethod = 'qr'"
              :class="[
                'flex items-center justify-center gap-2 py-3 px-6 rounded-xl transition-all duration-300',
                activeMethod === 'qr'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
              ]"
            >
              <i class="fas fa-qrcode text-lg"></i>
              QRIS
            </button>
          </div>

          <!-- Bank Transfer Section -->
          <div v-if="activeMethod === 'transfer'" class="space-y-6">
            <div
              v-for="bank in banks"
              :key="bank.name"
              class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="font-bold text-2xl text-primary">{{ bank.name }}</div>
                <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Bank Transfer
                </span>
              </div>
              <div class="space-y-3">
                <p class="font-medium text-gray-600">No. Rekening:</p>
                <div class="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <span class="text-xl font-semibold text-primary">{{ bank.account }}</span>
                  <button
                    @click="copyToClipboard(bank.account)"
                    class="flex items-center gap-2 text-primary hover:text-secondary transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
                  >
                    <template v-if="copiedAccount === bank.account">
                      <i class="fas fa-check"></i> Tersalin
                    </template>
                    <template v-else> <i class="fas fa-copy"></i> Salin </template>
                  </button>
                </div>
                <p class="text-primary font-medium">a.n. RPA</p>
              </div>
            </div>
          </div>

          <!-- QR Code Section -->
          <div v-if="activeMethod === 'qr'" class="bg-white rounded-xl shadow-md p-8 text-center">
            <h3 class="text-2xl font-bold text-primary mb-6">QRIS</h3>
            <div class="flex justify-center mb-6">
              <div
                class="w-64 h-64 border-2 border-gray-200 rounded-xl flex items-center justify-center bg-gray-50"
              >
                <i class="fas fa-qrcode text-8xl text-primary"></i>
              </div>
            </div>
            <p class="text-gray-600 mb-3">
              Scan QR code menggunakan aplikasi e-wallet atau m-banking Anda
            </p>
            <p class="text-primary font-medium">a.n. RPA</p>
          </div>

          <!-- Instructions -->
          <div class="mt-8 p-6 bg-gray-50 rounded-xl">
            <h2 class="text-xl font-semibold text-primary mb-4">
              Tata Cara {{ activeMethod === 'transfer' ? 'Transfer' : 'Pembayaran' }}:
            </h2>
            <ol class="list-decimal ml-4 space-y-3 text-gray-600">
              <template v-if="activeMethod === 'transfer'">
                <li>Pilih salah satu bank diatas</li>
                <li>Salin nomor rekening yang dituju</li>
              </template>
              <template v-else>
                <li>Scan QR Code menggunakan aplikasi pembayaran Anda</li>
              </template>
              <li>Lakukan transfer sesuai nominal yang diinginkan</li>
              <li>Simpan bukti transfer</li>
              <li>Konfirmasi donasi melalui WhatsApp dengan mengirimkan bukti transfer</li>
            </ol>
          </div>
        </div>

        <!-- WhatsApp Button -->
        <div class="text-center">
          <a
            href="https://wa.me/085277600700"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 text-white bg-primary hover:bg-secondary rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <i class="fab fa-whatsapp text-xl"></i>
            Konfirmasi via WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeMethod = ref('transfer')
const copiedAccount = ref('')

const banks = [
  { name: 'BCA', account: '1234567890' },
  { name: 'Mandiri', account: '0987654321' },
]

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedAccount.value = text
    setTimeout(() => {
      copiedAccount.value = ''
    }, 2000)
  } catch {
    alert('Gagal menyalin nomor rekening')
  }
}
</script>
