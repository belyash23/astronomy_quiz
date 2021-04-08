<template>
  <rating 
    :state="state" 
    :score="score"
    :maxScore="maxScore"
    @end-game="endGame"
    @restart="restart"
  />
  <stage
    :quiz="selectedQuiz"
    :state="state"
    :mustRestart="mustRestart"
    @ans="sendAnswer" 
    @game-over="showRating"
    @restarted="mustRestart=false"
  />
  <choose-screen 
    :state="state"
    :quizzes="quizzes"
    @quiz-selected="startQuiz"
  />
  <start-screen 
    :state="state" 
    @start="start"
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
      screen: 'start-screen',
      quizzes: quizzes,
      selectedQuiz: false,
      maxScore: 17,
      mustRestart: false
    }
  },
  methods: {
    start() {
      this.state= 'chooseQuiz'
    },
    sendAnswer(e) {
      if(e.correct) this.score += e.difficult
    },
    showRating() {
      this.state = 'game-over';
    },
    startQuiz(name) {
      this.state = 'playing';
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
