<template>
  <stage  :questions="questions" :state="state" @ans="sendAnswer" @game-over="showRating"/>
  <rating :state="state" :score="score" />
</template>

<script>
import Stage from './components/Stage.vue'
import Rating from './components/Rating.vue'
import questions from './questions.js'

export default {
  name: 'App',
  data() {
    return {
      questions: questions,
      score: 0,
      state: 'playing'
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
    Stage, Rating
  }
}
</script>
