<template>
  <div class="foot-menu-list">
    <footer-menu-item
      v-for="task in taskList"
      :key="task.icon"
      :data="task"
    ></footer-menu-item>
  </div>
</template>

<script>
import FooterMenuItem from './FooterMenuItem'
import { mapState } from 'vuex'
export default {
  components: { FooterMenuItem },
  computed: {
    ...mapState([
      'taskList'
    ])
  }
}
</script>

<style lang="less" scoped>
</style>
