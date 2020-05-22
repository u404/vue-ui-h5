<template>
  <div class="h5-call-app-banner" @click="$emit('click')">
    <i class="logo"></i>
    <div class="desc">{{desc}}</div>
    <span class="btn app-btn" @click="$emit('btnclick')">{{btnText}}</span>
  </div>
</template>

<script>
export default {
  name: 'h5-call-app-banner',
  props: {
    desc: {
      type: String,
      default: "打开移动电影院，大片等你演绎~"
    },
    btnText: {
      type: String,
      default: "打开APP"
    }
  }
}
</script>