export default {
  setActiveMenu (state, menu) {
    state.activeMenu = state.activeMenu === menu ? '' : menu
  },

  updateTaskList (state, taskList) {
    state.taskList = taskList
  },
  minizeWindow (state, menu) {
    state.taskList = state.taskList.map(item => {
      if (item.name === menu.name) {
        item.isOpen = false
      }
      return item
    })
  },
  closeWindow (state, menu) {
    state.taskList = state.taskList.filter(item => {
      return item.name !== menu.name
    })
  }
}
