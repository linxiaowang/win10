import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: [
      {
        name: 'chrome',
        icon: require('assets/imgs/icon-chrome.png')
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
