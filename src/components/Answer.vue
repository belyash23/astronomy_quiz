<template>
  <button class="answer" @click="sendAnswer">{{ answer.answer }}</button>
</template>

<script>
export default {
  name: 'Answer',
  props: {
    'answer': Object,
  },
  emits: ['ans'],
  methods: {
    sendAnswer() {
      this.$emit('ans', this.answer.correct);
    }
  }
}
</script>
