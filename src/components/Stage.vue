<template>
  <div class="stage">
      <div class="question">{{ question }}</div>
      <answer></answer>
  </div>
</template>

<script>
export default {
  name: 'Stage',
  props: {
    question: String,
    answers: Array
  }
}
</script>
