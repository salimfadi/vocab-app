<template>
  <footer class="bg-gray-100 text-gray-700">
    <div class="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-sm">
        <p class="font-semibold">Merci de soutenir Vocab App</p>
        <p class="text-xs mt-1">Chaque contribution aide à améliorer les leçons et ajouter de nouveaux contenus.</p>
      </div>

      <div class="flex items-center space-x-4">
        <nav class="text-sm">
          <NuxtLink to="/privacy" class="mr-3 hover:underline">Confidentialité</NuxtLink>
          <NuxtLink to="/terms" class="hover:underline">Conditions</NuxtLink>
        </nav>

        <DonateButton
          url="https://www.paypal.com/ncp/payment/TXJM3XZKYK484"
          label="💖 Soutenir ce projet"
        />
      </div>
    </div>
  </footer>
</template>

<script setup>
import DonateButton from '~/components/DonateButton.vue'
</script>

<style scoped>
/* styles légers pour le footer */
</style>
