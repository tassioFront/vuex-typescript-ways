import { Module } from 'vuex'
import { getters } from './getters'
import { mutations } from './mutations'
import { RootState } from '../types'

import GitUser from '@/models/IGitUser'

export const state: GitUser = {
  login: '',
  name: '',
  company: ''
}

const namespaced = true

export const stateManagement: Module<GitUser, RootState> = {
  namespaced,
  state,
  getters,
  mutations
}
