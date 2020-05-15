export default {
  path: '/state-management',
  name: 'StateManagement',
  component: () =>
    import(/* webpackChunkName: "hello-vue" */ '@/views/StateManagement.vue'),
}
