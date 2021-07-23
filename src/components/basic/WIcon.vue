<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="icon"></use>
  </svg>
</template>

<script>
export default {
  name: 'WIcon',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    icon () {
      return '#icon-' + this.type
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
