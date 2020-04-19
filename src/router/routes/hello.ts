export default {
  path: '/hello-vue',
  name: 'Hello Vue',
  component: () =>
    import(/* webpackChunkName: "hello-vue" */ '@/views/Hello.vue')
}
