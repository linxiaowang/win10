<template>
  <div class="desktop" :style="background">
    <w-main></w-main>
    <w-footer class="w-footer"></w-footer>
  </div>
</template>

<script>
// import WIcon from 'comps/basic/WIcon.vue'
import WFooter from '../layouts/footer/WFooter.vue'
import WMain from '../layouts/content/WMain.vue'
export default {
  name: 'Desktop',
  components: {
    // WIcon,
    WFooter,
    WMain
  },
  data () {
    return {
      background: {
        backgroundImage: 'url(' + require('assets/imgs/bg.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  }
}
</script>

<style lang="less">
.desktop {
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

</style>
