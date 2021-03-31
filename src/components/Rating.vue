<template>
  <div class="screen rating" v-if="showScreen">
    <transition name="fade-background">
      <img  class="screen__background" src="~Assets/rating-background.jpg" v-if="showBackground">
    </transition>
    <transition name="slide-content-up">
      <div class="rating__stars" v-if="showContent">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-14 -14 28 28" class="star">
          <path d="m 0 -10 L 3 -2 L 10 -2 L 4 2 L 7 10 L 0 5 L -7 10 L -4 2 L -10 -2 L -3 -2 Z" stroke="#ffffff" stroke-width="1" fill="#fabc4a" filter="url(#shadow)"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-14 -14 28 28" class="star">
          <path d="m 0 -10 L 3 -2 L 10 -2 L 4 2 L 7 10 L 0 5 L -7 10 L -4 2 L -10 -2 L -3 -2 Z" stroke="#ffffff" stroke-width="1" fill="#fabc4a" filter="url(#shadow)"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-14 -14 28 28" class="star">
          <path d="m 0 -10 L 3 -2 L 10 -2 L 4 2 L 7 10 L 0 5 L -7 10 L -4 2 L -10 -2 L -3 -2 Z" stroke="#ffffff" stroke-width="1" fill="#fabc4a" filter="url(#shadow)"/>
        </svg>
        <svg>
          <filter id="shadow" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </svg>
      </div>
    </transition>
    <transition name="slide-content-up">
      <div class="shifted-text_container" v-if="showContent">
        <shifted-text class="rating__title" text="Congratulations"/>
      </div>
    </transition>
    <transition name="slide-content-up">
      <div class="rating__score" v-if="showContent">Вы заработали {{ score }} из {{ maxScore }} баллов!</div>
    </transition>
    <transition name="slide-content-down">
      <div class="rating__buttons" v-if="showContent">
        <button 
          @click="endGame"
        >
          <shifted-text class="rating__buttons-text" 
            text="Завершить" 
            shiftBottom="18px"
          />
        </button>
        <button 
          @click="restart"
        >
          <shifted-text class="rating__buttons-text" 
            text="Начать заново"
            shiftBottom="18px"
          />
        </button>
      </div>
    </transition>
  </div>
</template>

<style lang="sass">
.rating
  position: relative
  &__stars
    position: relative
    z-index: 1
    width: 345px
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    margin: 50px auto
    :nth-child(3)
      margin-top: -145px
      width: 150px
  &__title
    fill: hsl(0, 100%, 54%)
    font-family: Sensei
    font-size: 3em
    margin-top: -240px
  &__score
    font-family: Capsmall
    font-size: 3em
    text-shadow: 2px 2px hsl(0, 0%, 0%)
    color: hsl(0, 0%, 100%)
    margin: 50px auto
    max-width: 800px
    text-align: center
    position: relative
    z-index: 1
  &__buttons
    position: absolute
    bottom: 50px
    display: flex
    width: 100vw
    justify-content: space-between
    font-family: Sensei
    button
      background: none
      border: none
      outline: none
    &-text
      fill: hsl(146, 100%, 25%)
      font-size: 4em
.star 
  width: 100px

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
import ShiftedText from 'Components/ShiftedText.vue'

export default {
  name: 'Rating',
  data() {
    return {
      showContent: false,
      showScreen: false,
      showBackground: false
    }
  },
  props: {
    'score': Number,
    'state': String,
    'maxScore': Number
  },
  emits: ['end-game', 'restart'],
  methods: {
    endGame() {
      this.showContent = false;
      this.showBackgrond = false;
      this.$emit('end-game');
    },
    restart() {
      this.showContent = false;
      this.showBackgrond = false;
      this.$emit('restart')
    }
  },
  watch: {
    state: {
      immediate: true,
      handler() {
        if(this.state === 'game-over') {
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
  components: {
    ShiftedText
  }
}
</script>
