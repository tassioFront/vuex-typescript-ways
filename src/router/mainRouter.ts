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
      import(/* webpackChunkName: "hello-vue" */ '../views/Dad.vue')
  },
  {
    path: '/data-binding',
    name: 'Data Binding',
    component: () =>
      import(/* webpackChunkName: "hello-vue" */ '../views/DataBinding.vue')
  }
]
