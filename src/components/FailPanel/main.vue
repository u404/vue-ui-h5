<template>
  <div class="h5-fail-panel" :class="`type-${type}`" @click="onClick">
    <div class="icon"></div>
    <div class="info">{{message}}</div>
    <div class="btn">{{btnText}}</div>
  </div>
</template>

<script>

export default {
  name: 'h5-fail-panel',
  props: {
    type: {
      type: Number,
      default: 1,   // default 0， api-error 1， not-login 2， not-in-app 3
    },
    message: {
      type: String,
      default: "加载失败"
    },
    btnText: {
      type: String,
      default: "刷新"
    },
    onClick: {
      type: Function,
      default() {
        window.location.reload()
      }
    }
  },

  methods: {
  }
}
</script>
