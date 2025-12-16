<template>
  <div class="p-4 border rounded shadow mt-6 bg-gray-50">
    <h2 class="text-xl font-bold mb-2">Score global</h2>
    <p>Bonnes réponses : {{ correctCount }} / {{ total }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useQuizStore } from '~/stores/quiz'

const quiz = useQuizStore()
const correctCount = computed(() => quiz.answers.filter(a => a === true).length)
const total = computed(() => quiz.answers.length)
</script>
