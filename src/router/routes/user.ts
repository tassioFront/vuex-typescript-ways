const User = () => import(/* webpackChunkName: "user" */ "@/views/User.vue")
const All = () => import(/* webpackChunkName: "user" */ "@/components/user/buttons/All.vue")
const New = () => import(/* webpackChunkName: "user" */ "@/components/user/buttons/New.vue")

export default
  {
    path: '/user',
    components: {
      default: User,
      new: New
    },
    children: [
      {
        path: '',
        component: All,
      },
      {
        path: 'all',
        name: 'All',
        component: () => import(/* webpackChunkName: "user" */ "@/components/user/All.vue"),
      },
      {
        path: 'new',
        name: 'New',
        component: () => import(/* webpackChunkName: "user" */ "@/components/user/NewUser.vue"),
      },
      {
        path: ':id',
        name: 'EditOne',
        component: () => import(/* webpackChunkName: "user" */ "@/components/user/Info.vue"),
        props: true,
      },
      {
        path: ':id/edit',
        name: 'Edit',
        component: () => import(/* webpackChunkName: "user" */ "@/components/user/Edit.vue"),
        props: true,
      }
    ]
  }
