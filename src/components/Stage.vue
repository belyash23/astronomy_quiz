<template>
  <div class="screen stage" 
    v-if="showScreen"
  > 
    <transition name="fade-background">
      <img :src="quiz.background" alt="" class="screen__background" v-if="showBackground">
    </transition>
    <transition name="slide-content-up">
      <div class="stage__num" v-if="showContent">{{ stageNum }} / {{ maxQuestions }}</div>
    </transition>
    <transition name="slide-content-up" >
      <div class="stage__question-container" v-if="showContent">
        <shifted-text class="stage__question"
          :text="question.question"
        />
      </div>
    </transition>
    <transition name="slide-content-down">
      <div class="stage__answers" v-if="showContent">
        <answer class="answer" 
          @ans="sendAnswer" v-for="answer in question.answers" 
          :key="answer.title" 
          :answer="answer"
          :wrongAnswer="wrongAnswer"
        />
      </div>
    </transition>
  </div>
</template>

<style scoped lang="sass">
@import '~CommonSass'
.stage
  &__num
    z-index: 1
    position: relative
    margin-top: 20px
    margin-left: 30px
    font-size: 3.5em
    font-family: Sensei
    color: hsl(0, 100%, 67%)
  &__question
    fill: hsl(0, 100%, 54%)
    font-family: Sensei
    font-size: 3em
.stage__answers
  margin: 200px auto 0px auto
  width: 90vw
  display: flex
  justify-content: space-between
  :nth-child(2)
    margin-top: -150px

.slide
  &-content
    &-up
      &-leave-active
        transition: all 0.5s ease-in
        opacity: 1
      &-leave-to
        opacity: 0
        transform: translateY(-100px)
    &-down
      &-leave-active
        transition: all 0.5s ease-in
        opacity: 1
      &-leave-to
        opacity: 0
        transform: translateY(100px)
.fade-background
  &-leave-active
    transition: all 1s ease-in
    opacity: 1
  &-leave-to
    opacity: 0
</style>
  
<script>
import Answer from 'Components/Answer.vue'
import ShiftedText from 'Components/ShiftedText.vue'

export default {
  name: 'Stage',
  data() {
    return {
      stageNum: 0,
      difficulties: {
        1: {
          max: 3,
          count: 0
        },
        2: {
          max: 1,
          count: 0
        },
        3: {
          max: 1,
          count: 0
        }
      },
      passed: [],
      question: null,
      maxQuestions: 5,
      wrongAnswer: false,
      showContent: false,
      showBackground: false,
      showScreen: false
    }
  },
  props: {
    state: String,
    quiz: false,
    mustRestart: Boolean
  },
  methods: {
    nextQuestionIndex() {
      let nextQuestionIndex  = null;
      let nextQuestionDifficult = null;
      while(
        this.passed.includes(nextQuestionIndex) ||
        nextQuestionIndex == null ||
        nextQuestionDifficult == 1 && this.difficulties[1].count == this.difficulties[1].max ||
        nextQuestionDifficult == 2 && this.difficulties[2].count == this.difficulties[2].max ||
        nextQuestionDifficult == 3 && this.difficulties[3].count == this.difficulties[3].max
        ) {
        nextQuestionIndex = Math.round(Math.random() * (this.quiz.questions.length-1));
        nextQuestionDifficult = this.quiz.questions[nextQuestionIndex].difficult;
      }
      return nextQuestionIndex;
    },
    nextQuestion() {
      this.wrongAnswer = false
      if(this.stageNum === this.maxQuestions) {
        this.gameOver()
        return
      }
      this.stageNum += 1
      const nextQuestionIndex = this.nextQuestionIndex();
      this.question = this.quiz.questions[nextQuestionIndex];
      this.passed.push(nextQuestionIndex);
      this.difficulties[this.question.difficult].count += 1
      this.shuffleAnswers();
    },
    shuffleAnswers() {
      const a = this.question.answers;
      //fisher-yates shuffle algorithm
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
    },
    sendAnswer(correct) {
      if(!correct) {
        this.wrongAnswer = true;
      }
      this.$emit('ans', {correct: correct, difficult: this.question.difficult});
      setTimeout(this.nextQuestion, 1000)
    },
    clearData() {
      this.stageNum = 0;
      for(let key in this.difficulties) {
        this.difficulties[key].count = 0;
      }
      this.passed = [];
    },
    restart() {
      this.clearData();
      this.nextQuestion()
    },
    gameOver() {
      this.showContent = false;
      this.showBackground = false;
      this.$emit('game-over');
      this.clearData();
    }
  },
  watch: {
    quiz: function() {
      if (this.quiz) {
        this.nextQuestion();
      }
    },
    mustRestart: {
      immediate: true,
      handler() {
        if(this.mustRestart) {
          this.$emit('restarted')
          this.clearData();
          this.restart();
        }
      }
    },
    state: {
      immediate: true,
      handler() {
        if(this.state === 'playing') {
          this.showBackground = true;
          this.showScreen = true;
          this.showContent = true;
        }
        else {
          setTimeout(() => this.showScreen = false, 1000)
        }
      }
    }
  },
  emits: ['ans', 'game-over', 'restarted'],
  components: {
    Answer, ShiftedText
  }
}
</script>
