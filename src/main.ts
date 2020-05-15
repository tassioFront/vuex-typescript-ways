import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { get } from '@/services/fakeUser'
import storage from '@/services/localStorage.service'

Vue.config.productionTip = false

const initApp = () => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

const token = storage.get<string>('fakeToken')

if (token) {
  get('https://api.github.com/users/tassioFront').then(response => {
    console.log(
      `%c reload - request userInfo- it's call just on reload page`,
      "font-family: Helvetica; color: yellow; font-size: 15px;"
    );

    if (response?.data?.email) {
      console.log(
        `%c reload - commit userData`,
        "font-family: Helvetica; color: yellow; font-size: 15px;"
      );
      store.commit('stateManagement/' + 'setUser', response.data);
    }

    initApp()
  })
}
