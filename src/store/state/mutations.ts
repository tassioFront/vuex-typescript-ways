import { MutationTree } from 'vuex'
import { ProfileState } from './types'
import GitUser from '@/models/IGitUser'

export const mutations: MutationTree<ProfileState> = {
  setUser(state, payload: GitUser) {
    state.user = payload
  }
}
