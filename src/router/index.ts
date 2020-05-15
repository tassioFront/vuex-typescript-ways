import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import { routes } from './routes'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

console.log("router", router.currentRoute)

router.beforeEach(async (to: Route, from: Route, next) => {
  const isAuth = !!store.getters['stateManagement/userInfo'].name

  console.log(
    `%c reload - data from store(beforeEach)`,
    "font-family: Helvetica; color: violet; font-size: 15px;",
    isAuth
  );

  const needAndNotHasPermission = isAuth && to.matched.some(record => record.meta.authenticate)
  if (needAndNotHasPermission) {
    return next({ path: '/state-management' });
  }

  return next();
});

export default router
