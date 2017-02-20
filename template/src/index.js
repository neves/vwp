import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'

Vue.use(router)
Vue.use(store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
