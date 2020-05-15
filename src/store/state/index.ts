import { Module } from 'vuex'
import { getters } from './getters'
import { mutations } from './mutations'
import { ProfileState } from './types'
import { RootState } from '../types'

export const state: ProfileState = {
  user: {
    login: '',
    name: '',
    company: ''
  }
}

const namespaced = true

export const stateManagement: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  mutations
}
