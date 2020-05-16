import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { get } from '@/services/fakeUser.service'
import storage from '@/services/localStorage.service'
import * as HelperGlobal from '@/mixins/consoleLog'

Vue.config.productionTip = false

Vue.mixin(HelperGlobal.ConsoleLog)

const yellow = "color: yellow"

const token = storage.get<string>('fakeToken')

const initApp = async () => {

  if (token) {
    try {
      const response = await get('https://api.github.com/users/tassioFront')
      HelperGlobal.default("initApp", yellow, response);
      HelperGlobal.default("reload - request userInfo- it's call just on reload page", yellow);

      if (response?.data?.id) {
        HelperGlobal.default("reload - commit Data", yellow);
        store.commit('stateManagement/' + 'setUser', response.data);
      }

    } catch (error) {
      console.error("initApp -> error", error.response)
    }
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

initApp()

