<template>
  <div class="h5-avator" :class="[`h5-avator-${type}-${size}`, `h5-avator-sex-${sex}`]" @click.stop="$emit('click')">
    <span class="h5-avator-border" :style="{ 'border-color': borderColor }"></span>
    <i v-avator="src"></i>
  </div>
</template>

<script>
import avatorDirective from "@src/directives/avator"

// 用户type定义
const userTypeDef = {
  normal: 0,
  v: 1,
  cast: 2,
  admin: 3,
  star: 4
}

export default {
  name: 'h5-avator',
  props: {
    src: String,
    size: {
      type: Number,
      default: 4  // 1 - 5
    },
    type: {
      type: Number,
      default: 0   // 0 普通用户， 1 v， 2 咖， 3 管理员, 4 新明星
    },
    sex: {
      type: Number,
      default: 0     // 0 未知，1 男， 2 女
    },
    borderColor: {
      type: String,
      default: ""
    }
  },
  directives: {
    avator: avatorDirective
  }
}
</script>
