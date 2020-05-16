import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import { routes } from './routes'
import store from '@/store'
import * as HelperGlobal from '@/mixins/consoleLog'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach(async (to: Route, from: Route, next) => {
  const isAuth = !!store.getters['stateManagement/userInfo'].name

  HelperGlobal.default(`reload and on change route`,
    "color: violet",
    router.currentRoute)

  HelperGlobal.default(`reload and on change route - data from store(beforeEach)`,
    "color: violet",
    isAuth)

  const needAndNotHasPermission = isAuth && to.matched.some(record => record.meta.authenticate)
  if (needAndNotHasPermission) {
    return next({ path: '/state-management' });
  }

  return next();
});

export default router
