<template>
  <div class="screen choose-screen" v-if="showChooseScreen">
    <transition name="fade-choose-screen-background">
      <img class="screen__background choose-screen__background" src="~Assets/choose-quiz-screen-background.jpg" v-if="showBackground">
    </transition>
    <transition name="slide-quizzes">
      <div class="quizzes" v-if="showContent">
        <div class="quizzes__container" 
          v-for="quiz in quizzes" 
          :key="quiz.title"
        >
          <quiz-miniature
            :quiz="quiz"
            :maxHeight="quizMiniatureMaxHeight"
            @quiz-selected="quizSelected"
          />
        </div>
      </div>
    </transition>

    <transition name="slide-choose-screen__title">
      <div class="choose-screen__title" v-if="showContent">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 100 20">
          <path id="curve" d="m 0 20 c 4 -2 25 -10 50 -10 c 25 0 46 8 50 10" stroke-width="0.1"/>
          <text width="600">
            <textPath xlink:href="#curve" startOffset="50%" text-anchor="middle">
              Выберите викторину
            </textPath>
          </text>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 100 20" class="choose-screen__title_shift">
          <path id="curve" d="m 0 20 c 4 -2 25 -10 50 -10 c 25 0 46 8 50 10"  stroke-width="0.1"/>
          <text width="600">
            <textPath xlink:href="#curve" startOffset="50%" text-anchor="middle">
              Выберите викторину
            </textPath>
          </text>
        </svg>
      </div>
    </transition>
    <transition name="slide-choose-screen__title">
      <div class="choose-screen__title_straight" v-if="showContent">
        <shifted-text class="stage__question"
          :text="'ВЫБЕРИТЕ ВИКТОРИНУ'"
          :shiftRight="'3px'"
          :shiftBottom="'3px'"
        />
      </div>
    </transition>
  </div>
</template>

<style scoped lang="sass">
@import '~CommonSass'
.choose-screen
  overflow: none
  &__title
    margin: 25vh auto 0px auto
    font-size: calc(14px - 0.6vw)
    font-family: Sensei
    text-transform: uppercase
    max-width: 90vw
    transform: translate(2%)
    @media screen and (min-width: 1400px)
      font-size: 35%
    @media screen and (max-height: 580px)
      margin-top: 15vh
    @media screen and (max-height: 460px)
      display: none
    &_straight
      display: none
      fill: hsl(0, 100%, 54%)
      @media screen and (max-height: 460px)
        display: block
        font-family: Sensei
        font-size: 0.7em
        margin-top: -25px
    &_shift
      position: absolute
      right: 0.4%
      bottom: 0.4%
      text
        stroke: hsl(0, 0%, 100%)
        stroke-width: 0.15px
        fill: transparent
path
  fill: transparent
  stroke: none
text
  fill: hsl(0, 100%, 54%)
  transform: translateY(7px)
.quizzes
  display: flex
  max-width: 95vw
  margin: 50px auto 0px auto
  justify-content: space-between
  z-index: 1
  position: relative
  @media screen and (max-width: 1000px)
    font-size: 0.8em
  @media screen and (max-height: 520px)
    margin-top: 10px
  &__container
    flex-grow: 1

.slide
  &-quizzes
    &-leave-active
      transition: all 0.5s ease-in
      opacity: 1
    &-leave-to
      opacity: 0
      transform: translateY(-100px)
  &-choose-screen__title
    &-leave-active
      transition: all 0.5s ease-in
      opacity: 1
    &-leave-to
      opacity: 0
      transform: translateY(100px)
.fade-choose-screen-background
  &-leave-active
    transition: all 1s ease-in
    opacity: 1
  &-leave-to
    opacity: 0
</style>

<script>
import QuizMiniature from 'Components/QuizMiniature.vue'
import ShiftedText from 'Components/ShiftedText.vue'

export default {
  name: 'ChooseScreen',
  data() {
    return {
      showContent: false,
      showChooseScreen: false,
      showBackground: false,
      quizMiniatureMaxHeight: '250px'
    }
  },
  props: {
    'state': String,
    'quizzes': Object
  },
  methods: {
    quizSelected(name) {
      this.showContent = false;
      this.showBackground = false;
      this.$emit('quiz-selected', name)
    }
  },
  components: {
    QuizMiniature, ShiftedText
  },
  watch: {
    state: {
      immediate: true,
      handler() {
        if(this.state === 'chooseQuiz') {
          this.showBackground = true;
          this.showChooseScreen = true;
          this.showContent = true;
        }
        else {
          setTimeout(() => this.showChooseScreen = false, 1000)
        }
      }
    }
  },
  created() {
    if(window.innerWidth <= 1000) {
      this.quizMiniatureMaxHeight = '200px'
    }
    else {
      this.quizMiniatureMaxHeight = '250px'
    }
    window.addEventListener('resize', function() {
      if(window.innerWidth <= 1000) {
        this.quizMiniatureMaxHeight = '200px'
      }
      else {
        this.quizMiniatureMaxHeight = '250px'
      }
    }.bind(this))
  }
}
</script>
