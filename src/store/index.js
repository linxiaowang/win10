import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: [
      {
        name: 'chrome',
        icon: require('assets/imgs/icon-chrome.png')
      }
    ],
    activeMenu: ''
  },
  mutations,
  actions: {
  },
  modules: {
  }
})
