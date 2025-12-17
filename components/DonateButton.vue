<template>
  <div class="mt-6">
    <a
      :href="url || runtime.public.PAYPAL_URL || 'https://www.paypal.com/ncp/payment/TXJM3XZKYK484'"
      target="_blank"
      rel="noopener noreferrer"
      class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      {{ label }}
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  url: { type: String, required: false },
  label: { type: String, default: 'Soutenir ce projet' }
})

const runtime = useRuntimeConfig()
</script>
