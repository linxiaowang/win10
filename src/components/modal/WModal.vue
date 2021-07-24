<template>
  <vue-draggable-resizable
    :w="w"
    :h="w"
    @dragging="onDrag"
    @resizing="onResize"
    :parent="true"
  >
    <slot></slot>
  </vue-draggable-resizable>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  components: {
    VueDraggableResizable
  },

  props: {
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    }
  },

  methods: {
    onResize: function (x, y, width, height) {
      this.$emit('update:x', x)
      this.$emit('update:y', y)
      this.$emit('update:width', width)
      this.$emit('update:height', height)
    },
    onDrag: function (x, y) {
      this.$emit('update:x', x)
      this.$emit('update:y', y)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
