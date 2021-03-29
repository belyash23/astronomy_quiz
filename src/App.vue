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
    :mustRestart="mustRestart"
    @ans="sendAnswer" 
    @game-over="showRating"
    @restarted="mustRestart=false"
  />
  <rating 
    :state="state" 
    :score="score"
    :maxScore="maxScore"
    @end-game="endGame"
    @restart="restart"
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
      selectedQuiz: false,
      maxScore: 17,
      mustRestart: false
    }
  },
  methods: {
    sendAnswer(e) {
      if(e.correct) this.score += e.difficult
    },
    showRating() {
      this.state = 'game-over';
    },
    startQuiz(name) {
      this.state = 'playing'
      this.selectedQuiz = quizzes[name]
    },
    endGame() {
      this.selectedQuiz = false;
      this.score = 0;
      this.state = "start";

    },
    restart() {
      this.score = 0;
      this.state="playing"
      this.mustRestart = true;
    }
  },
  components: {
    Stage, Rating, StartScreen, ChooseScreen
  }
}
</script>
