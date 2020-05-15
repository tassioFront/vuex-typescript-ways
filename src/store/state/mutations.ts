import { MutationTree } from 'vuex'
import GitUser from '@/models/IGitUser'

export const mutations: MutationTree<GitUser> = {
  setUser(state, stateManagement: GitUser) {
    const { login, name, company } = stateManagement
    state.login = login
    state.name = name
    state.company = company
  }
}
