<template>
  <button class="quiz-miniature" 
    @click = 'selectQuiz'
  >
    <img  alt="" class="quiz-miniature__img" 
      :src="quiz.miniature"
    >
    <div class="quiz-miniature__text">{{ quiz.title }}</div>
  </button>
</template>

<style lang="sass">
@import '~CommonSass'

.quiz-miniature
  border: none
  outline: none
  background: none
  &__img
    max-height: 250px
    border: 1px solid white
    border-radius: 20px
  &__text
    color: #ffffff
    font-family: Capsmall
    margin-top: 10px
    font-size: 2em
    text-align: center
</style>

<script>
export default {
  name: 'QuizMiniature',
  data() {
    return {
    }
  },
  props: {
    'quiz': Object
  },
  methods: {
    selectQuiz(name) {
      this.$emit('quiz-selected', this.quiz.name)
    }
  },
  emits: ['quiz-selected']
}
</script>
