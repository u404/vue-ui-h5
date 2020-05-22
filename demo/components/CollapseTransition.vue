<template>
  <example-box name="CollapseTransition 过渡效果">
    <button @click="toggle">展开折叠</button>
    <h5-collapse-transition>
      <ul v-show="show">
        <li v-for="i in list" :key="i">列表{{i}}</li>
      </ul>
    </h5-collapse-transition>
  </example-box>
</template>

<script>
  import ExampleBox from "./ExampleBox"
  // import CollapseTransition from "@src/components/CollapseTransition"
  export default {
    components: {
      ExampleBox
      // CollapseTransition
    },
    data() {
      return {
        show: false,
        list: 10
      }
    },

    methods: {
      toggle() {
        this.show = !this.show
      }
    }
  }
</script>

<style lang="scss">
</style>