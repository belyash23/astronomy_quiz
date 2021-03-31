<template>
  <div class="screen start-screen" v-if="showStartScreen">
    <transition name="fade-start-screen-background">
      <img class="screen__background start-screen__background" src="~Assets/start-screen.jpg" v-if="showBackground">
    </transition>
    <transition 
      name="slide-start-button"
      @after-enter="showDescription=true"
    >
      <button 
        class="start-screen__start-button animated-gradient" 
        @click="removeButtons" 
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
  &__start-button
    position: relative
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
    position: relative
    margin-top: 30px
    font-family: Capsmall
    color: hsl(169, 100%, 50%)
    font-size: 3em
    max-width: 1000px
    text-alin: center
    margin-left: 150px
    text-shadow: 2px 2px #000000

.slide-start-button
  &-enter-active
    transition: all 1s ease-out
    opacity: 1
  &-enter-from
    opacity: 0
    transform: translateY(-100px)
  &-leave-active
    transition: all 0.5s ease-in
    opacity: 1
  &-leave-to
    opacity: 0
    transform: translateY(-100px)

.slide-description
  &-enter-active
    transition: all 1s ease-out
    opacity: 1
  &-enter-from
    opacity: 0
    transform: translateY(100px)
  &-leave-active
    transition: all 0.5s ease-in
    opacity: 1
  &-leave-to
    opacity: 0
    transform: translateY(100px)

.fade-start-screen-background
  &-leave-active
    transition: all 1s ease-in
    opacity: 1
  &-leave-to
    opacity: 0
</style>

<script>
export default {
  name: 'StartScreen',
  data() {
    return {
      showStartButton: false,
      showDescription: false,
      showBackground: true,
      showStartScreen: true
    }
  },
  props: {
    'state': String
  },
  emits: ['start'],
  methods: {
    removeButtons() {
      this.showStartButton = false;
      this.showDescription = false;
      this.showBackground = false;
      this.$emit('start')
    }
  },
  watch: {
    state: {
      immediate: true,
      handler() {
        if(this.state === 'start') {
          this.showBackground = true;
          this.showStartScreen = true;
          setTimeout(() => this.showStartButton = true, 500, this)
        }
        else {
          setTimeout(() => this.showStartScreen = false, 1000)
        }
      }
    }
  }

}
</script>
