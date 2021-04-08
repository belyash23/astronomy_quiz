<template>
  <button class="quiz-miniature" 
    @click = 'selectQuiz'

  >
    <img  alt="" class="quiz-miniature__img" 
      :src="quiz.miniature"
      :style="{
        height: maxHeight,
        width: maxHeight
      }"
    >
    <div class="quiz-miniature__text">{{ quiz.title }}</div>
  </button>
</template>

<style scoped lang="sass">
@import '~CommonSass'

.quiz-miniature
  border: none
  outline: none
  background: none
  display: block
  margin: auto
  &__img
    border: 2px solid white
    border-radius: 20px
    object-fit: cover
  &__text
    color: #ffffff
    font-family: Capsmall
    margin-top: 10px
    font-size: 2em
    text-align: center
    text-shadow: 2px 2px #000000
</style>

<script>
export default {
  name: 'QuizMiniature',
  data() {
    return {
    }
  },
  props: {
    quiz: Object,
    maxHeight: {
      type: String,
      default: "150px"
    }
  },
  methods: {
    selectQuiz(name) {
      this.$emit('quiz-selected', this.quiz.name)
    }
  },
  emits: ['quiz-selected']
}
</script>
