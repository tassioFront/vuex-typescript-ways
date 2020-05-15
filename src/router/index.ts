import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import { routes } from './routes'
import store from '@/store'
console.log("store", store)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

console.log("router", router.currentRoute)

router.beforeEach(async (to: Route, _, next) => {
  if (to.matched.some(record => record.meta.authenticate)) {
    // if (!isAuthenticated(to) && window.outerWidth > 800)
    //   return next({ name: 'Login' });
  }

  // if (
  //   to.matched.some(
  //     record => record.meta.breadcrumb && to.meta.breadcrumb.length,
  //   )
  // ) {
  //   store.commit(NAMESPACE + MUT_SET_BREADCRUMB, to.meta.breadcrumb);
  // }

  return next();
});

export default router
