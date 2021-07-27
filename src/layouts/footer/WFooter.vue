<template>
  <div class="w-footer">
    <footer-left></footer-left>
    <footer-right></footer-right>
  </div>
</template>

<script>
import FooterLeft from './left/FooterLeft.vue'
import FooterRight from './right/FooterRight.vue'
export default {
  components: { FooterLeft, FooterRight }
}
</script>

<style lang="less" scoped>
.w-footer {
  display: flex;
  justify-content: space-between;
  height: 40px;
  opacity: 0.9;
  background-color: #cfdce3;
  z-index: 3;
}
</style>
