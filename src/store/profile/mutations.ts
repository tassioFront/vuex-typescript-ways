import { MutationTree } from 'vuex'
import { ProfileState } from './types'

export const mutations: MutationTree<ProfileState> = {
  profileLoaded (state, payload: GitUser) {
    state.user = payload
  }
}
