<template>
  <div class="p-4 border rounded shadow mt-6">
    <h2 class="text-xl font-bold mb-4">Quiz vocabulaire</h2>

    <div v-for="(q, i) in questions" :key="i" class="mb-4">
      <p class="font-semibold">{{ q.word }}</p>
      <div>
        <button
          v-for="(opt, j) in q.options"
          :key="j"
          class="px-3 py-1 m-1 border rounded hover:bg-gray-200"
          @click="checkAnswer(i, opt)"
          :disabled="quiz.answers[i] !== null"
        >
          {{ opt }}
        </button>
      </div>
      <p v-if="quiz.answers[i] !== null" class="mt-2">
        <span v-if="quiz.answers[i]" class="text-green-600">✅ Correct !</span>
        <span v-else class="text-red-600">❌ Faux</span>
      </p>
    </div>

    <div class="mt-6">
      <button
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        @click="quiz.resetAnswers(questions.length)"
      >
        🔄 Rejouer
      </button>
    </div>
  </div>
</template>

<script setup>
import { useQuizStore } from '~/stores/quiz'

const quiz = useQuizStore()

const questions = [
  { word: 'Hello', options: ['Bonjour', 'Au revoir', 'Merci'], correct: 'Bonjour' },
  { word: 'Book', options: ['Stylo', 'Livre', 'Chaise'], correct: 'Livre' },
  { word: 'House', options: ['Maison', 'Voiture', 'Arbre'], correct: 'Maison' }
]

function checkAnswer(index, option) {
  quiz.setAnswer(index, option === questions[index].correct)
}
</script>
