import Home from '../views/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hello-vue',
    name: 'Hello Vue',
    component: () =>
      import(/* webpackChunkName: "hello-vue" */ '../views/Hello.vue')
  },
  {
    path: '/directives',
    name: 'Directives',
    component: () =>
      import(/* webpackChunkName: "hello-vue" */ '../views/Directives.vue')
  }
]
