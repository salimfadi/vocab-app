import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQuizStore = defineStore('quiz', () => {
  const answers = ref([])

  function setAnswer(index, isCorrect) {
    answers.value[index] = isCorrect
  }

  function resetAnswers(total) {
    answers.value = Array(total).fill(null)
  }

  return { answers, setAnswer, resetAnswers }
})
