<template>
  <!-- <div class="stage__question shifted-text">
    <p class="shifted-text__text">{{ text }}</p>
    <p class="shifted-text__shift">{{ text }}</p>
  </div> -->
  <div class="shifted-text">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -5 100 10" class="shifted-text__text">
      <text x="50%">
        {{ text }}
      </text>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -5 100 10" class="shifted-text__shift" :style="{right: shiftRight, bottom: shiftBottom}">
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
  &__text
    font-size: 0.1em
    text-anchor: middle
    dominant-baseline: middle
  &__shift
    text-anchor: middle
    dominant-baseline: middle
    font-size: 0.1em
    fill: transparent
    stroke: hsl(0, 0%, 100%)
    stroke-width: 0.1px
    position: absolute
</style>
  
<script>
export default {
  name: 'ShiftedText',
  props: {
    text: String,
    shiftRight: {
      type: String,
      default: '4px'
    },
    shiftBottom: {
      type: String,
      default: '13px'
    }
  }
}
</script>
