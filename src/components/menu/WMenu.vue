<template>
  <div class="w-menu">
    <div
      class="w-menu-item"
      :class="{ active: activeApp === menu.name }"
      v-for="menu in menuList"
      :key="menu.name"
      @click.stop="selectMenu(menu)"
      @dblclick="openApp(menu)"
      :title="menu.title"
      v-clickoutside="handleMenuOutsideClick"
    >
      <img class="w-menu-item__img" :src="menu.icon" :alt="menu.name" />
      <div class="w-menu-item__name">{{ menu.name }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import clickoutside from 'directives/clickoutside.js'
export default {
  data () {
    return {
      menuList: [
        {
          name: 'chrome',
          tag: 'WChrome',
          icon: require('assets/imgs/icon-chrome.png'),
          width: 800,
          height: 300,
          x: 300,
          y: 300,
          active: false,
          isOpen: false,
          isFullScreen: false
        },
        {
          name: 'notepad',
          tag: 'WNotepad',
          icon: require('assets/imgs/icon-notepad.png'),
          width: 800,
          height: 300,
          x: 300,
          y: 300,
          active: false,
          isOpen: false,
          isFullScreen: false
        }
      ],
      activeApp: ''
    }
  },

  directives: {
    clickoutside
  },

  computed: {
    ...mapState(['taskList'])
  },

  methods: {
    ...mapMutations(['setActiveMenu', 'updateTaskList']),
    selectMenu (menu) {
      this.activeApp = menu.name
    },
    handleMenuOutsideClick () {
      this.activeApp = ''
    },
    openApp (menu) {
      let isTaskExist = false
      const taskList = this.taskList.map(item => {
        if (item.name === menu.name) {
          isTaskExist = true
        }
        item.isOpen = item.active = item.name === menu.name
        return item
      })
      if (isTaskExist) {
        this.updateTaskList(taskList)
      }
      if (!isTaskExist) {
        menu.active = menu.isOpen = true
        this.setActiveMenu(menu.name)
        taskList.push(menu)
        this.updateTaskList(taskList)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.w-menu {
  position: absolute;
  left: 30px;
  top: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // margin: 30px 0 0 30px;

  &-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    user-select: none;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    &__img {
      width: 30px;
      height: 30px;
      margin-bottom: 5px;
    }

    &__name {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 14px;
      white-space: normal;
      text-overflow: ellipsis;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .active {
    background-color: rgba(255, 255, 255, 0.3);
  }
}
</style>
