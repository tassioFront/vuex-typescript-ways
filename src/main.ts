import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { get } from '@/services/fakeUser.service'
import storage from '@/services/localStorage.service'

Vue.config.productionTip = false

const token = storage.get<string>('fakeToken')

const initApp = async () => {

  if (token) {
    try {
      const response = await get('https://api.github.com/users/tassioFront')
      console.log("initApp -> response", response)
      console.log(
        `%c reload - request userInfo- it's call just on reload page`,
        "font-family: Helvetica; color: yellow; font-size: 15px;"
      );
      if (response?.data?.id) {
        console.log(
          `%c reload - commit userData`,
          "font-family: Helvetica; color: yellow; font-size: 15px;"
        );
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

