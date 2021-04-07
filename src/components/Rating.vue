<template>
  <div class="screen rating" v-if="showScreen">
    <transition name="fade-background">
      <img  class="screen__background" src="~Assets/rating-background.jpg" v-if="showBackground">
    </transition>
    <div class="fireworks fireworks-left"></div>
    <div class="fireworks fireworks-right"></div>
    <transition name="slide-content-up">
      <div class="rating__stars" v-if="showContent">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-14 -14 28 28" class="star">
          <path d="m 0 -10 L 3 -2 L 10 -2 L 4 2 L 7 10 L 0 5 L -7 10 L -4 2 L -10 -2 L -3 -2 Z" stroke="#ffffff" stroke-width="1" :fill="starFillColor(1)" filter="url(#shadow)"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-14 -14 28 28" class="star">
          <path d="m 0 -10 L 3 -2 L 10 -2 L 4 2 L 7 10 L 0 5 L -7 10 L -4 2 L -10 -2 L -3 -2 Z" stroke="#ffffff" stroke-width="1" :fill="starFillColor(2)" filter="url(#shadow)"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-14 -14 28 28" class="star">
          <path d="m 0 -10 L 3 -2 L 10 -2 L 4 2 L 7 10 L 0 5 L -7 10 L -4 2 L -10 -2 L -3 -2 Z" stroke="#ffffff" stroke-width="1" :fill="starFillColor(3)" filter="url(#shadow)"/>
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
          />
        </button>
        <button 
          @click="restart"
        >
          <shifted-text class="rating__buttons-text" 
            text="Начать заново"
          />
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="sass">
.rating
  &__stars
    position: relative
    z-index: 0
    width: 345px
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    margin: 50px auto
    :nth-child(3)
      margin-top: -145px
      width: 150px
  &__title
    max-width: 450px
    margin: 50px auto 0px auto
    fill: hsl(0, 100%, 54%)
    font-family: Sensei
    font-size: 0.9em
    margin-top: -200px
    @media screen and (max-width: 720px)
      font-size: 0.8em
    @media screen and (max-height: 360px)
      margin-top: -220px
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
    @media screen and (max-height: 420px)
      margin-top: 0px
    @media screen and (max-height: 360px)
      margin-top: -20px
    @media screen and (max-width: 720px)
      font-size: 2.5em
  &__buttons
    position: absolute
    bottom: 50px
    display: flex
    width: 100vw
    justify-content: space-around
    font-family: Sensei
    @media screen and (max-height: 480px)
      bottom: 10px
    @media screen and (max-height: 360px)
      bottom: 5px
    button
      width: 300px
      background: none
      border: none
      outline: none
    &-text
      fill: hsl(146, 100%, 25%)
      font-size: 0.9em
.star 
  width: 100px

.fireworks
  width: 400px
  height: 400px
  position: absolute
  &-right
    right: 0px

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
import { Fireworks } from 'fireworks-js'

export default {
  name: 'Rating',
  data() {
    return {
      showContent: false,
      showScreen: false,
      showBackground: false,
      starsAmount: 0
    }
  },
  props: {
    'score': Number,
    'state': String,
    'maxScore': Number
  },
  emits: ['end-game', 'restart'],
  methods: {
    starFillColor(starNum) {
      if(starNum == 1) return '#fabc4a'
      else if(starNum == 2 && this.starsAmount >= 2) return '#fabc4a'
      else if(starNum == 3 && this.starsAmount == 3) return '#fabc4a'
      else return 'transparent'
    },
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
          setTimeout(function() {
            this.fireworks = new Fireworks({
              target: document.querySelector('.fireworks-left'),
              hue: 120,
              startDelay: 1,
              minDelay: 30,
              maxDelay: 40,
              speed: 5,
              acceleration: 1.15,
              friction: 0.88,
              gravity: 1,
              particles: 65,
              trace: 3,
              explosion: 6,
              boundaries: {
                top: 70,
                bottom: 400,
                left: 70,
                right: 400
              },
              sound: {
                enable: false,
              }
            })
            this.fireworks.start()

                        this.fireworks1 = new Fireworks({
              target: document.querySelector('.fireworks-right'),
              hue: 120,
              startDelay: 5,
              minDelay: 25,
              maxDelay: 45,
              speed: 5,
              acceleration: 1.15,
              friction: 0.88,
              gravity: 1,
              particles: 65,
              trace: 3,
              explosion: 6,
              boundaries: {
                top: 70,
                bottom: 400,
                left: 70,
                right: 400
              },
              sound: {
                enable: false,
              }
            })
            this.fireworks1.start()
          }, 10, this)
          
          
        }
        else {
          if(this.fireworks) {
            this.fireworks.stop()
            this.fireworks.clear()
            this.fireworks1.stop()
            this.fireworks1.clear()
          }

          setTimeout(() => this.showScreen = false, 1000)
        }
      }
    },
    score() {
      if(this.score <= 7) this.starsAmount = 1
      else if(this.score <= 14) this.starsAmount = 2
      else this.starsAmount = 3
    }
  },
  components: {
    ShiftedText
  }
}
</script>
