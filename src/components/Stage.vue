<template>
  <div class="screen stage" 
    v-if="state === 'playing'"
    :style="{backgroundImage: `url(${quiz.background})`}"
  >
      <div class="stage__num">{{ stageNum }} / {{ maxQuestions }}</div><br>
      <shifted-text class="stage__question"
        :text="question.question"
      />
      <div class="stage__answers">
        <answer class="answer" 
          @ans="sendAnswer" v-for="answer in question.answers" 
          :key="answer.title" 
          :answer="answer"
        />
      </div>
  </div>
</template>

<style scoped lang="sass">
@import '~CommonSass'
.stage
  &__num
    margin-top: 20px
    margin-left: 30px
    font-size: 3.5em
    font-family: Sensei
    color: hsl(0, 100%, 67%)
  &__question
    fill: hsl(0, 100%, 54%)
    font-family: Sensei
    font-size: 3em
.stage__answers
  margin: 200px auto 0px auto
  width: 90vw
  display: flex
  justify-content: space-between
  :nth-child(2)
    margin-top: -150px
</style>
  
<script>
import Answer from 'Components/Answer.vue'
import ShiftedText from 'Components/ShiftedText.vue'

export default {
  name: 'Stage',
  data() {
    return {
      stageNum: 0,
      difficulties: {
        1: {
          max: 3,
          count: 0
        },
        2: {
          max: 1,
          count: 0
        },
        3: {
          max: 1,
          count: 0
        }
      },
      passed: [],
      question: null,
      maxQuestions: 5,
    }
  },
  props: {
    'state': String,
    'quiz': false
  },
  methods: {
    nextQuestionIndex() {
      let nextQuestionIndex  = null;
      let nextQuestionDifficult = null;
      while(
        this.passed.includes(nextQuestionIndex) ||
        nextQuestionIndex == null ||
        nextQuestionDifficult == 1 && this.difficulties[1].count == this.difficulties[1].max ||
        nextQuestionDifficult == 2 && this.difficulties[2].count == this.difficulties[2].max ||
        nextQuestionDifficult == 3 && this.difficulties[3].count == this.difficulties[3].max
        ) {
        nextQuestionIndex = Math.round(Math.random() * (this.quiz.questions.length-1));
        nextQuestionDifficult = this.quiz.questions[nextQuestionIndex].difficult;
      }
      return nextQuestionIndex;
    },
    nextQuestion() {
      if(this.stageNum === this.maxQuestions) {
        this.$emit('game-over');
        return
      }
      this.stageNum += 1
      const nextQuestionIndex = this.nextQuestionIndex();
      this.question = this.quiz.questions[nextQuestionIndex];
      this.passed.push(nextQuestionIndex);
      // console.log(this.question.difficult, this.difficulties)
      this.difficulties[this.question.difficult].count += 1
      this.shuffleAnswers();
    },
    shuffleAnswers() {
      const a = this.question.answers;
      //fisher-yates shuffle algorithm
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
    },
    sendAnswer(correct) {
      this.nextQuestion();
      this.$emit('ans', {correct: correct, difficult: this.question.difficult});
    }
  },
  watch: {
    quiz: function() {
      if (this.quiz) {
        this.nextQuestion()
      }
    }
  },
  emits: ['ans', 'game-over'],
  components: {
    Answer, ShiftedText
  }
}
</script>
