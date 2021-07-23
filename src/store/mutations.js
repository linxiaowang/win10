export default {
  setActiveMenu (state, menu) {
    state.activeMenu = state.activeMenu === menu ? '' : menu
  }
}
