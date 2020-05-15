import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { profile } from './profile/index'
import { stateManagement } from './state/index'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    profile,
    stateManagement
  }
}

export default new Vuex.Store<RootState>(store)
