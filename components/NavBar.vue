<template>
  <header class="bg-gray-800 text-white">
    <div class="max-w-5xl mx-auto flex items-center justify-between p-4">
      <div class="flex items-center space-x-3">
        <img src="/logo.png" alt="Logo" class="h-8 w-8 object-contain" v-if="showLogo" />
        <h1 class="text-lg font-bold">Vocab App</h1>
      </div>

      <nav class="hidden md:flex space-x-4">
        <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
        <NuxtLink to="/about" class="hover:underline">À propos</NuxtLink>
        <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
      </nav>

      <div class="flex items-center space-x-3">
        <button @click="$emit('toggle-menu')" class="md:hidden text-white">
          ☰
        </button>
        <DonateButton
          url="https://www.paypal.com/ncp/payment/TXJM3XZKYK484"
          label="Soutenir"
        />
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-if="mobileOpen" class="md:hidden bg-gray-700">
      <div class="flex flex-col p-3 space-y-2">
        <NuxtLink to="/" class="block">Accueil</NuxtLink>
        <NuxtLink to="/about" class="block">À propos</NuxtLink>
        <NuxtLink to="/contact" class="block">Contact</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import DonateButton from '~/components/DonateButton.vue'

const props = defineProps({
  showLogo: { type: Boolean, default: true }
})

const mobileOpen = ref(false)
function toggleMenu() {
  mobileOpen.value = !mobileOpen.value
}
defineEmits(['toggle-menu'])
</script>

<style scoped>
/* styles légers pour le header */
</style>
