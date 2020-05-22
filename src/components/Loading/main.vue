<template>
  <div class="h5-loading" v-show="show">
    <div class="loading-main" :class="{ 'has-tips': msg }">
      <i class="loading-icon"></i>
      <div class="loading-tips">{{msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h5-loading',
  props: {
    msg: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>