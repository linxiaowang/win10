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
        v-for="(task, index) in taskList"
        :key="task.icon"
        :data="task"
        :class="{ active: task.active }"
        @click.native="toggleActive(index)"
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
  },
  methods: {
    toggleActive (index) {
      const taskList = this.taskList
      const { active } = taskList[index]
      taskList[index].isOpen = taskList[index].active = !active
      this.$store.commit('updateTaskList', taskList)
    }
  }
}
</script>

<style lang="less" scoped>
.foot-menu-list {
  display: flex;
}

.active {
  background-color: rgb(227, 234, 238);
}
</style>
