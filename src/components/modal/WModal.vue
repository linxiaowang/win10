<template>
  <vue-draggable-resizable
    :min-width="300"
    :min-height="200"
    @dragging="onDrag"
    :parent="true"
    drag-cancel=".no-drag"
    style="position: absolute"
  >
    <slot></slot>
  </vue-draggable-resizable>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
export default {
  components: {
    VueDraggableResizable
  },

  props: {
    w: {
      type: Number,
      default: 100
    },
    h: {
      type: Number,
      default: 100
    },
    x: {
      type: Number,
      default: 100
    },
    y: {
      type: Number,
      default: 100
    }
  },

  methods: {
    onResize: function (x, y, width, height) {
      this.$emit('update:x', x)
      this.$emit('update:y', y)
      this.$emit('update:w', width)
      this.$emit('update:h', height)
    },
    onDrag: function (x, y) {
      this.$emit('update:x', x)
      this.$emit('update:y', y)
    }
  }
}
</script>

<style lang="less" scoped>
.example {
  width: 100%;
  height: 100%;
}
</style>
