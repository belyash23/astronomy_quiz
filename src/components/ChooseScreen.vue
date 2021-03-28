<template>
  <div class="screen choose-screen" v-if="state === 'chooseQuiz'">
    <div class="quizzes">
      <div class="quizzes__container" 
        v-for="quiz in quizzes" 
        :key="quiz.title"
      >
        <quiz-miniature
          :quiz="quiz"
          @quiz-selected="quizSelected"
        />
      </div>
    </div>

    <div class="choose-screen__title">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 100 10">
        <path id="curve" d="m 0 20 c 4 -2 25 -10 50 -10 c 25 0 46 8 50 10" stroke-width="0.1"/>
        <text width="600">
          <textPath xlink:href="#curve" startOffset="50%" text-anchor="middle">
            Выберите викторину
          </textPath>
        </text>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 100 10" class="choose-screen__title_shift">
        <path id="curve" d="m 0 20 c 4 -2 25 -10 50 -10 c 25 0 46 8 50 10"  stroke-width="0.1"/>
        <text width="600">
          <textPath xlink:href="#curve" startOffset="50%" text-anchor="middle">
            Выберите викторину
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '~CommonSass'
.choose-screen 
  background-image: url('~Assets/choose-quiz-screen-background.jpg')
  &__title
    margin: 25vh auto 0px auto
    font-size: 35%
    font-family: Sensei
    text-transform: uppercase
    max-width: 90vw
    transform: translate(2%)
    &_shift
      position: absolute
      right: 0.4%
      bottom: 0.4%
      text
        stroke: hsl(0, 0%, 100%)
        stroke-width: 0.1px
        fill: transparent
path
  fill: transparent
  stroke: none
text
  fill: hsl(0, 100%, 54%)
  transform: translateY(4px)
.quizzes
  display: flex
  max-width: 95vw
  margin: 50px auto 0px auto
  justify-content: space-between
  transform: translateX(-50px)
  &__container
    flex-grow: 1
</style>

<script>
import QuizMiniature from 'Components/QuizMiniature.vue'

export default {
  name: 'ChooseScreen',
  data() {
    return {
    }
  },
  props: {
    'state': String,
    'quizzes': Object
  },
  methods: {
    quizSelected(name) {
      this.$emit('quiz-selected', name)
    }
  },
  components: {
    QuizMiniature
  }
}
</script>
