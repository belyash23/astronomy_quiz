<template>
  <div class="screen start-screen" v-if="state === 'start'">
    <transition 
      name="slide-start-button"
      @after-enter="showDescription=true"
    >
      <button 
        class="start-screen__start-button animated-gradient" 
        @click="start" 
        v-if="showStartButton"
      >
        <div class="animated-gradient__background">Начать</div>
      </button>
    </transition>
    <transition name="slide-description">
      <div 
        class="start-screen__description" 
        v-if="showDescription"
      >
        Главное всюду - начать; начало - важнейшая часть дел!
      </div>
    </transition>
  </div>
</template>

<style lang="sass">
@import '~CommonSass'
.start-screen
  background-image: url('~Assets/start-screen.png')
  &__start-button
    font-family: Sensei
    outline: none
    border: none
    background: hsl(102, 63%, 60%)
    background-clip: text
    width: 400px
    color: transparent
    font-size: 6em
    margin-top: 35vh
    text-align: center
    margin-left: 80px
    transition: 1s
  &__description
    margin-top: 30px
    font-family: Capsmall
    color: hsl(169, 100%, 50%)
    font-size: 3em
    max-width: 1000px
    text-alin: center
    margin-left: 150px
    text-shadow: 2px 2px #000000

.slide-start-button-enter-active
  transition: all 1s ease-out
  opacity: 1
.slide-start-button-enter-from
  opacity: 0
  transform: translateY(-100px)

.slide-description-enter-active
  transition: all 1s ease-out
  opacity: 1
.slide-description-enter-from
  opacity: 0
  transform: translateY(100px)
</style>

<script>
export default {
  name: 'StartScreen',
  data() {
    return {
      show: true,
      showStartButton: false,
      showDescription: false
    }
  },
  props: {
    'state': String
  },
  emits: ['start'],
  methods: {
    start() {
      this.$emit('start');
    }
  },
  mounted() {
    setTimeout(() => this.showStartButton = true, 500, this)
  }

}
</script>
