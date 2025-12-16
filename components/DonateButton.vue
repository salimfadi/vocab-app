<template>
  <div class="mt-6">
    <a
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      💖 {{ label }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'Soutenir ce projet'
  }
})
</script>
