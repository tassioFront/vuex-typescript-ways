import Vue from 'vue'
import Component from 'vue-class-component'
import { RouteConfig } from 'vue-router'
import { routes } from '@/router/mainRouter'

let _allRoutes: RouteConfig[] = []

const routerHandling = (
  routes: RouteConfig[],
  _allRoutes: RouteConfig[]
): RouteConfig[] => {
  routes.forEach(route => {
    _allRoutes.push(route)
  })
  return _allRoutes
}

_allRoutes = routerHandling(routes, _allRoutes)

@Component
export class AllRoutes extends Vue {
  _allRoutes = _allRoutes;
}

const getRoutes = {
  computed: {
    _allRoutes () {
      return _allRoutes
    }
  }
}

export default getRoutes
