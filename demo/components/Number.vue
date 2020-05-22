<template>
  <example-box name="Number">
    <h5-number :value="1000"></h5-number>
  </example-box>
</template>

<script>
  import ExampleBox from "./ExampleBox"
  // import Number from "@src/components/Number"
  export default {
    components: {
      ExampleBox
      // Number
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss">
</style>