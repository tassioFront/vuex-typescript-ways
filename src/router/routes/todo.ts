export default {
  path: "/todo",
  name: "Todo",
  component: () =>
    import(/* webpackChunkName: "todo" */ "../../views/Todo/Todo.vue")
};
