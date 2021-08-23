<template>
  <i class="iconfont" :class="`icon-${icon}`" :style="{fontSize: `${size}px`}"></i>
</template>

<script>
export default {
  name: 'WIcon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 14
    },
    color: {
      type: String,
      default: '#333'
    }
  },
  computed: {
    icon () {
      return this.type
    }
  }
}
</script>

<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>
