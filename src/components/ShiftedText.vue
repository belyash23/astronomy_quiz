<template>
  <div class="shifted-text">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 20" class="shifted-text__text">
      <text x="50%">
        {{ text }}
      </text>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 20" class="shifted-text__shift" :style="{right: shiftRight, bottom: shiftBottom}">
      <text x="50%">
        {{ text }}
      </text>
    </svg>
  </div>
</template>

<style scoped lang="sass">
@import '~CommonSass'
.shifted-text
  position: relative
  font-size: calc(1.2em - 1vw)
  @media screen and (min-width: 1350px)
      font-size: 35%
  &__text
    text-anchor: middle
    dominant-baseline: middle
  &__shift
    text-anchor: middle
    dominant-baseline: middle
    fill: transparent
    stroke: hsl(0, 0%, 100%)
    stroke-width: 0.15px
    position: absolute
</style>
  
<script>
export default {
  name: 'ShiftedText',
  props: {
    text: String,
    shiftRight: {
      type: String,
      default: '5px'
    },
    shiftBottom: {
      type: String,
      default: '5px'
    }
  }
}
</script>
