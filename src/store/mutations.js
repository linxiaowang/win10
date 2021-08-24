export default {
  setActiveMenu (state, menu) {
    state.activeMenu = state.activeMenu === menu ? '' : menu
  },

  updateTaskList (state, taskList) {
    state.taskList = taskList
  },
  minizeWindow (state, menu) {
    // 在激活窗口后触发
    state.taskList = state.taskList.map(item => {
      if (item.name === menu.name) {
        item.active = false
        item.isOpen = false
      }
      return item
    })
  },
  maximizeWindow (state, menu) {
    state.taskList = state.taskList.map(item => {
      if (item.name === menu.name) {
        item.fullScreen = !item.fullScreen
      }
      return item
    })
  },
  // 关闭应用
  closeWindow (state, menu) {
    state.taskList = state.taskList.filter(item => {
      return item.name !== menu.name
    })
  }
}
