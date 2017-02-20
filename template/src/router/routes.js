function R (name) {
  return require(`../views/${name}View`)
}

export default [
  {
    path: '/',
    name: 'Home',
    component: R('Home')
  },
  {
    path: '*',
    name: 'NotFound',
    component: R('NotFound')
  }
]
