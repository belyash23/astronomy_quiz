<template>
  <start-screen 
    :state="state" 
    @start="state='chooseQuiz'"
  />
  <choose-screen 
    :state="state"
    :quizzes="quizzes"
    @quiz-selected="startQuiz"
  />
  <stage
    :quiz="selectedQuiz"
    :state="state" 
    @ans="sendAnswer" 
    @game-over="showRating"
  />
  <rating 
    :state="state" 
    :score="score" 
  />
</template>

<script>
import Stage from './components/Stage.vue'
import Rating from './components/Rating.vue'
import StartScreen from 'Components/StartScreen.vue'
import ChooseScreen from 'Components/ChooseScreen.vue'
import quizzes from 'Js/getQuizzes.js'

export default {
  name: 'App',
  data() {
    return {
      score: 0,
      state: 'start',
      quizzes: quizzes,
      selectedQuiz: false
    }
  },
  methods: {
    sendAnswer(e) {
      if(e.correct) this.score += e.difficult
      console.log(e)
    },
    showRating() {
      this.state = 'game-over';
    },
    startQuiz(name) {
      this.state = 'playing'
      this.selectedQuiz = quizzes[name]
    }
  },
  components: {
    Stage, Rating, StartScreen, ChooseScreen
  }
}
</script>
