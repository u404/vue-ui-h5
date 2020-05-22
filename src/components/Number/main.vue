<template>
  <CountTo :startVal="start" :endVal="value" :duration="time" />
</template>

<script>
import CountTo from "vue-count-to"
export default {
  name: 'h5-number',
  components: {
    CountTo
  },
  props: {
    start: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    time: {
      type: Number,
      default: 1000
    }
  }
}
</script>