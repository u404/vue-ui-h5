<template>
  <example-box name="Alert">
    <button class="test-btn" @click="alert">弹出</button>
  </example-box>
</template>

<script>
  import ExampleBox from "./ExampleBox"
  // import Alert from "@src/components/Alert"
  export default {
    components: {
      ExampleBox
      // Alert
    },
    data() {
      return {
        
      }
    },
    methods: {
      alert() {
        this.$alert('1234')
      }
    }
  }
</script>

<style lang="scss">
</style>