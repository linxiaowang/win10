<template>
  <div class="w-footer__left">
    <footer-menu-item :data="winObj"></footer-menu-item>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import FooterMenu from './components/FooterMenu'
import FooterMenuItem from './components/FooterMenuItem'
export default {
  components: { FooterMenuItem, FooterMenu },
  data () {
    return {
      winObj: {
        icon: require('assets/imgs/icon-win.png')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.w-footer__left {
  display: flex;
}
</style>
