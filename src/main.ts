import Vue from 'vue'
import * as JsmComponents from 'jsm-components'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(JsmComponents.JsmButton)
Vue.use(JsmComponents.JsmInput)
Vue.use(JsmComponents.JsmCard)
Vue.use(JsmComponents.JsmBreadcrumb)
Vue.use(JsmComponents.JsmCheckbox)
Vue.use(JsmComponents.JsmRecaptcha)
Vue.use(JsmComponents.JsmSelect)
Vue.use(JsmComponents.JsmTable)
Vue.use(JsmComponents.JsmLoading)
Vue.use(JsmComponents.JsmModal)
Vue.use(JsmComponents.JsmNotification)
Vue.use(JsmComponents.JsmMetter)
Vue.use(JsmComponents.JsmAccordion)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
