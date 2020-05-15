import Home from '@/views/Home.vue'
import directives from './directives'
import hello from './hello'
import user from './user'
import stateManagement from './stateManagement'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { ...directives },
  { ...hello },
  { ...user },
  { ...stateManagement },
]
