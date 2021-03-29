<template>
  <div class="screen rating" v-if="state === 'game-over'">
    <div class="rating__stars">

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
    <shifted-text class="rating__title" text="Congratulations" />
    <div class="rating__score">Вы заработали {{ score }} из {{ maxScore }} баллов!</div>
    <div class="rating__buttons">
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
  </div>
</template>

<style lang="sass">
.rating
  background-image: url('~Assets/rating-background.jpg')
  &__stars
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
    margin-top: -250px
  &__score
    font-family: Capsmall
    font-size: 3em
    text-shadow: 1px 1px 1px hsl(0, 0%, 0%)
    color: hsl(0, 0%, 100%)
    margin: 50px auto
    max-width: 800px
    text-align: center
  &__buttons
    margin: 400px auto 0px auto
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
</style>

<script>
import ShiftedText from 'Components/ShiftedText.vue'

export default {
  name: 'Rating',
  props: {
    'score': Number,
    'state': String,
    'maxScore': Number
  },
  emits: ['end-game', 'restart'],
  methods: {
    endGame() {
      this.$emit('end-game');
    },
    restart() {
      this.$emit('restart')
    }
  },
  components: {
    ShiftedText
  }
}
</script>
