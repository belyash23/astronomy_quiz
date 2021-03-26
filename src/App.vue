<template>
  <start-screen :state="state" @start-game="state='playing'"/>
  <stage  :questions="questions" :state="state" @ans="sendAnswer" @game-over="showRating"/>
  <rating :state="state" :score="score" />
</template>

<script>
import Stage from './components/Stage.vue'
import Rating from './components/Rating.vue'
import StartScreen from 'Components/StartScreen.vue'
import questions from './js/questions.js'

export default {
  name: 'App',
  data() {
    return {
      questions: questions,
      score: 0,
      state: 'start'
    }
  },
  methods: {
    sendAnswer(correct) {
      if(correct) this.score++
    },
    showRating() {
      this.state = 'game-over';
    }
  },
  components: {
    Stage, Rating, StartScreen
  }
}
</script>
