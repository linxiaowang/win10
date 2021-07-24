export default {
  setActiveMenu (state, menu) {
    state.activeMenu = state.activeMenu === menu ? '' : menu
  },

  updateTaskList (state, taskList) {
    state.taskList = taskList
  }
}
