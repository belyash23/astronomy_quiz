<template>
  <div class="rating" v-if="state === 'game-over'">
    <div class="title">Рейтинг</div>
    <div class="rating__score">{{ score }}</div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    'score': Number,
    'state': String
  },
}
</script>
