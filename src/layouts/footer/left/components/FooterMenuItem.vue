<template>
  <div class="w-footer_menu-item footer-hover">
    <img class="wfmi-img" :src="data.icon" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="less" scoped>
.w-footer_menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 40px;

  .wfmi-img{
    width: 20px;
    height: 20px;
  }
}
</style>
