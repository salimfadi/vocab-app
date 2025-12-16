<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">5 mots du jour</h1>

    <!-- Affichage des cartes de vocabulaire -->
    <WordCard
      v-for="(item, i) in words"
      :key="i"
      :word="item.word"
      :translation="item.translation"
      :example="item.example"
    />

    <!-- Score global -->
    <ScoreBoard />

    <!-- Quiz vocabulaire -->
    <Quiz />

    <!-- Bouton de donation -->
    <DonateButton
      url="https://www.paypal.com/ncp/payment/TXJM3XZKYK484"
      label="Soutenir ce projet"
    />
    <DonateButton url="https://www.paypal.com/ncp/payment/TXJM3XZKYK484" label="Soutenir ce projet" />
  </div>
</template>

<script setup>
import DonateButton from "~/components/DonateButton.vue"
import WordCard from '~/components/WordCard.vue'
import Quiz from '~/components/Quiz.vue'
import ScoreBoard from '~/components/ScoreBoard.vue'
import DonateButton from '~/components/DonateButton.vue'

const words = [
  { word: 'Hello', translation: 'Bonjour', example: 'Hello, how are you?' },
  { word: 'Book', translation: 'Livre', example: 'I read a book.' },
  { word: 'House', translation: 'Maison', example: 'The house is big.' },
  { word: 'Food', translation: 'Nourriture', example: 'The food is delicious.' },
  { word: 'Friend', translation: 'Ami', example: 'My friend is kind.' }
]
</script>
