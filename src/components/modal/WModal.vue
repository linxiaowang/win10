<template>
  <vue-draggable-resizable
    :min-width="300"
    :min-height="200"
    :w="w"
    :h="h"
    :x="x"
    :y="y"
    @resizing="onResize"
    @dragging="onDrag"
    :parent="true"
    drag-cancel=".no-drag"
    style="position: absolute"
  >
    <slot></slot>
  </vue-draggable-resizable>
</template>

<script>
import { mapMutations } from 'vuex'
import VueDraggableResizable from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
export default {
  components: {
    VueDraggableResizable
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          w: 300,
          h: 100,
          x: 100,
          y: 100
        }
      }
    }
  },

  computed: {
    w () {
      return this.data.fullScreen ? window.innerWidth : this.data.width
    },

    h () {
      return this.data.fullScreen ? window.innerHeight - 40 : this.data.height
    },

    x () {
      return this.data.fullScreen ? 0 : this.data.x
    },
    y () {
      return this.data.fullScreen ? 0 : this.data.y
    }
  },

  methods: {
    ...mapMutations(['updateTaskList']),
    onResize: function (x, y, width, height) {
      const data = JSON.parse(JSON.stringify(this.data))
      Object.assign(data, {
        x,
        y,
        w: width,
        h: height
      })
      this.updateTaskList(this.getUpdatedTaskList(data))
    },
    onDrag: function (x, y) {
      const data = JSON.parse(JSON.stringify(this.data))
      Object.assign(data, {
        x,
        y
      })
      this.updateTaskList(this.getUpdatedTaskList(data))
    },
    getUpdatedTaskList (data) {
      const taskList = this.$store.state.taskList.map((item) => {
        if (item.name === data.name) {
          item = data
        }
        return item
      })
      return taskList
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
