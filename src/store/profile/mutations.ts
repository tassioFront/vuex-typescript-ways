import { MutationTree } from 'vuex'
import { ProfileState, User } from './types'

export const mutations: MutationTree<ProfileState> = {
  profileLoaded (state, payload: User) {
    state.user = payload
  },
  profileError (state) {
    state.user = undefined
  }
}
