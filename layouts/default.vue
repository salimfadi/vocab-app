<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />

    <main class="flex-1">
      <slot />
    </main>

    <FooterContent />
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'
import FooterContent from '~/components/FooterContent.vue'
</script>

<style>
/* styles globaux du layout */
</style>
