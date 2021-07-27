<template>
  <div class="w-main">
    <w-menu></w-menu>
    <component
      v-for="item in taskList"
      :key="item.name"
      :is="`${item.tag}`"
      :class="{ active: item.active }"
      :appData="item"
      @click.native="activeApp(item)"
    ></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import WMenu from 'comps/menu/WMenu.vue'
export default {
  components: {
    WMenu,
    WChrome: () => import('comps/chrome/WChrome.vue'),
    WNotepad: () => import('comps/notepad/WNotepad.vue')
  },

  computed: {
    ...mapState(['activeMenu', 'taskList'])
  },

  data () {
    return {
      activeApp (menu) {
        const taskList = this.taskList.map(item => {
          item.active = item.name === menu.name
          return item
        })
        this.$store.commit('updateTaskList', taskList)
      }
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

.active {
  z-index: 2;
}
</style>
