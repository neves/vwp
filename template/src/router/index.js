import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
  routes: routes
})

var installed = false

router.install = function (Vue, options) {
  if (installed) return
  installed = true
  Vue.use(VueRouter)
  Vue.mixin({router})
}

export default router
