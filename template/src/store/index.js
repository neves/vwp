import Vue from 'vue'
import Vuex from 'vuex'

const modules = {
  state: {
    counter: 0
  },
  mutations: {},
  actions: {}
}

function install (Vue) {
  Vue.use(Vuex)
  const store = new Vuex.Store(modules)
  Vue.mixin({store})
}

export default install
