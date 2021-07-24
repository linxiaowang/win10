<template>
  <div class="foot-menu-list">
    <draggable
      v-model="taskList"
      group="people"
      @start="drag = true"
      @end="drag = false"
      style="display: flex"
    >
      <footer-menu-item
        v-for="task in taskList"
        :key="task.icon"
        :data="task"
      ></footer-menu-item>
    </draggable>
  </div>
</template>

<script>
import FooterMenuItem from './FooterMenuItem'
import draggable from 'vuedraggable'
export default {
  components: { FooterMenuItem, draggable },
  computed: {
    taskList: {
      get () {
        return this.$store.state.taskList
      },
      set (val) {
        this.$store.commit('updateTaskList', val)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.foot-menu-list {
  display: flex;
}
</style>
