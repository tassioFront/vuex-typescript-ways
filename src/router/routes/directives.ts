export default {
  path: '/directives',
  name: 'Directives',
  component: () =>
    import(/* webpackChunkName: "hello-vue" */ '@/views/Directives.vue'),
}
