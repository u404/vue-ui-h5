<template>
  <example-box name="Loading">
    <example-box name="默认Loading">
      <h5-loading></h5-loading>
    </example-box>
    <example-box name="带提示文字的Loading">
      <h5-loading msg="正在加载"></h5-loading>
    </example-box>
    <example-box name="带提示文字的Loading">
      <button class="test-btn" @click="showLoading" ref="testBtn">弹出loading</button>
      <button class="test-btn" @click="showFullScreenLoading">弹出全屏loading</button>
    </example-box>
  </example-box>
</template>

<script>
  import ExampleBox from "./ExampleBox"
  // import Loading from "@src/components/Loading"
  export default {
    components: {
      ExampleBox
      // Loading
    },
    data() {
      return {
        
      }
    },
    methods: {
      showLoading() {
        const loading = this.$loading({ parent: this.$refs.testBtn.parentNode, msg: "2秒后消失" })
        setTimeout(() => loading.close(), 2000)
      },
      showFullScreenLoading() {
        const loading = this.$loading({ msg: "2秒后消失" })
        setTimeout(() => loading.close(), 2000)
      }
    }
  }
</script>

<style lang="scss">
.test-btn {
  width: rem(150);
  height: rem(30);
}
</style>