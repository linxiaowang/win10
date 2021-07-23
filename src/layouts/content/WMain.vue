<template>
  <div class="w-main">
    <w-menu></w-menu>
  </div>
</template>

<script>
import WMenu from 'comps/menu/WMenu.vue'
export default {
  components: {
    WMenu
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.w-main {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
}
</style>
