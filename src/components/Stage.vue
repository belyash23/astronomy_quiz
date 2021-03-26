<template>
  <div class="stage" v-if="state === 'playing'">
      <div class="stage__num">{{ stageNum }}/5</div><br>
      <div class="stage__question">{{ question.title }}</div>
      <answer class="answer" @ans="sendAnswer" v-for="answer in question.answers" :key="answer.title" :answer="answer"/>
  </div>
</template>

<script>
import Answer from '../components/Answer.vue'

export default {
  name: 'Stage',
  data() {
    return {
      stageNum: 0,
      passed: [],
      question: null
    }
  },
  props: {
    'questions': Array,
    'state': String
  },
  methods: {
    nextQuestionIndex() {
      let nextQuestionIndex  = null;
      while(this.passed.includes(nextQuestionIndex) || nextQuestionIndex == null) {
        nextQuestionIndex = Math.round(Math.random() * (this.questions.length-1));
      }
      return nextQuestionIndex;
    },
    nextQuestion() {
      if(this.stageNum === 5) {
        this.$emit('game-over');
        return
      }
      this.stageNum += 1
      const nextQuestionIndex = this.nextQuestionIndex();
      this.question = this.questions[nextQuestionIndex];
      this.passed.push(nextQuestionIndex);
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
      this.$emit('ans', correct);
    }
  },
  created() {
    this.nextQuestion();
  },
  emits: ['ans', 'game-over'],
  components: {
    Answer
  }
}
</script>
