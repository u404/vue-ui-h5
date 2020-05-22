<template>
  <div class="h5-alert" @click="close">
    <transition name="h5-fade" appear>
      <div class="h5-alert-mask" v-show="visible"></div>
    </transition>
    <transition name="h5-slideUp" appear>
      <div class="h5-alert-body" v-show="visible">
        <slot><div class="h5-alert-msg" role="alert">{{msg}}</div></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'h5-alert',
  props: {
  },

  data () {
    return {
      timer: null,
      visible: false,
      msg: ""
    }
  },

  methods: {
    show (msg, { autoClose = 3000 }) {
      this.msg = msg
      this.timer && clearTimeout(this.timer)
      this.visible = true
      if(autoClose) {
        this.timer = setTimeout(() => this.close(), autoClose)
      }
    },
    close () {
      this.timer && clearTimeout(this.timer)
      this.timer = null
      this.visible = false
      this.$emit("close")
      console.log("close")
    }
  }

}
</script>