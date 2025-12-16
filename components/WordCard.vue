<template>
  <div class="p-4 border rounded shadow">
    <h2 class="text-xl font-bold">{{ word }}</h2>
    <p class="italic">{{ translation }}</p>
    <p>{{ example }}</p>
  </div>
</template>

<script setup>
defineProps({
  word: String,
  translation: String,
  example: String
})
</script>
