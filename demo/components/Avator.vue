<template>
  <example-box name="Avator">
    <example-box name="普通用户各尺寸">
      <div class="flex-box">
        <h5-avator :size="1"></h5-avator>
        <h5-avator :size="2"></h5-avator>
        <h5-avator :size="3"></h5-avator>
        <h5-avator :size="4"></h5-avator>
        <h5-avator :size="5"></h5-avator>
      </div>
    </example-box>
    <example-box name="普通（0）、银v（1）、咖（2）、金v（3）、明星（4）">
      <div class="flex-box">
        <h5-avator :type="0" :size="1"></h5-avator>
        <h5-avator :type="1" :size="2"></h5-avator>
        <h5-avator :type="2" :size="3"></h5-avator>
        <h5-avator :type="3" :size="4"></h5-avator>
        <h5-avator :type="4" :size="5"></h5-avator>
      </div>
    </example-box>
    <example-box name="普通用户自定义边框颜色">
      <div class="flex-box">
        <h5-avator :size="1"></h5-avator>
        <h5-avator :size="2" borderColor="#fc03c0"></h5-avator>
        <h5-avator :size="3" borderColor="#dcb3c0"></h5-avator>
        <h5-avator :size="4" borderColor="#c03d7e"></h5-avator>
        <h5-avator :size="5" borderColor="#bcd984"></h5-avator>
      </div>
    </example-box>
    <example-box name="传入头像图片，及加载失败的图片">
      <div class="flex-box">
        <h5-avator :type="3" :size="3" src="fasdfasdfas"></h5-avator>
        <h5-avator :type="0" :size="3" src="http://smart-java-test.smartcinema.com.cn/1556087778386.png"></h5-avator>
        <h5-avator :type="1" :size="4" src="http://smart-java-test.smartcinema.com.cn/1556087778386.png"></h5-avator>
        <h5-avator :type="2" :size="4" src="http://smart-java-test.smartcinema.com.cn/1556087778386.png"></h5-avator>
        <h5-avator :type="3" :size="5" src="http://smart-java-test.smartcinema.com.cn/1556087778386.png"></h5-avator>
      </div>
    </example-box>
    

  </example-box>
</template>

<script>
  import ExampleBox from "./ExampleBox"
  // import Avator from "@src/components/Avator"
  export default {
    components: {
      ExampleBox
      // Avator
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
.flex-box {
  padding: 0 rem(15);
  @include flex();
}
</style>