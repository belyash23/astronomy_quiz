<template>
  <div class="screen start-screen" v-if="state === 'start'">
    <button class="start-screen__start-button" @click="startGame">Начать</button>
    <div class="start-screen__description">Главное всюду - начать; начало - важнейшая часть дел!</div>
  </div>
</template>

<style lang="sass">
@import '~CommonSass'
.start-screen
  overflow: auto
  height: 100vh
  background: url('~Assets/start-screen.png') center
  background-size: cover
  &__start-button
    display: block
    font-family: Sensei
    outline: none
    border: none
    background: none
    color: hsl(102, 63%, 60%)
    font-size: 6em
    margin: 35vh auto 0px auto
    width: 200px
    text-align: center
    margin-left: 80px
  &__description
    margin-top: 30px
    font-family: Capsmall
    color: hsl(169, 100%, 50%)
    font-size: 3em
    max-width: 1000px
    text-alin: center
    margin-left: 150px
    
</style>

<script>
export default {
  name: 'StartScreen',
  props: {
    'state': String
  },
  emits: ['start-game'],
  methods: {
    startGame() {
      this.$emit('start-game');
    }
  }
}
</script>
