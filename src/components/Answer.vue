<template>
  <button class="answer" @click="sendAnswer" :style="{backgroundImage: `url('${backgroundImage}')`}">
    <div class="answer__text"><p v-html="answer.answer"></p></div>
  </button>
</template>

<style scoped lang="sass">
@import '~CommonSass'
.answer
  z-index: 1
  width: 360px
  height: 360px
  outline: none
  border: none
  background-repeat: no-repeat
  background-size: contain
  background-position: center  
  background-color: transparent
  &:before
    content: ""
    shape-outside: polygon(-52px 36px, 75.13% -2.35%, 115.47% -7px, 74.84% -0.01%, 49.02% 6.14%, 28.05% 12%, 4.26% 22.65%, -5.36% 32.96%, -11.35% 45.42%, -10% 59.52%, 1.7% 74.87%, 17.98% 86.76%, 39.51% 94.21%, 68.29% 101.29%, 112.87% 103.97%, -36.18% 95.31%)
    shape-margin: 7%
    width: 50%
    height: 100%
    float: left
  &__text
    font-size: 2em
    color: hsl(0deg, 0%, 100%)
    text-shadow: 0px 0px 10px #000000
    font-family: Capsmall
    height: 90%
    text-align: center
    &:before
      content: ""
      shape-outside: polygon(262px 206px, 109.84% -24px, 7.28% -1.82%, 44.24% -2.35%, 76.34% 5.12%, 98.85% 14.76%, 110.83% 29.77%, 112.77% 47.76%, 96.99% 70.33%, 68.95% 85.71%, 42.45% 93.21%, -2.45% 94.28%, 107.47% 417.06%, 97.87% 749.49%, 7.3% 893.44%)
      shape-margin: 7%
      width: 50%
      height: 100%
      float: right
</style>

<script>
export default {
  name: 'Answer',
  data() {
    return {
      backgroundImage: require('Assets/answer-border.png')
    }
  },
  props: {
    answer: Object,
    wrongAnswer: Boolean
  },
  emits: ['ans'],
  methods: {
    sendAnswer() {
      if(this.answer.correct) {
        this.backgroundImage = require('Assets/answer-border-green.png')
      }
      else {
        this.backgroundImage = require('Assets/answer-border-red.png')
      }
      this.$emit('ans', this.answer.correct);
    }
  },
  watch: {
    answer: {
      immediate: true,
      handler() {
        this.backgroundImage = require('Assets/answer-border.png');
        setTimeout(function() {
          const text = document.querySelectorAll('.answer__text p')
          text.forEach(item => {
            const answer = document.querySelector('.answer')
            const margin = (answer.clientHeight - item.clientHeight)/4
            item.style.transform = `translateY(${margin}px)`
          })
        }, 10)
      }
    },
    wrongAnswer: function() {
      if(this.wrongAnswer && this.answer.correct) {
        this.backgroundImage = require('Assets/answer-border-green.png')
      }
    }
  }
}
</script>
