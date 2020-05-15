import { GetterTree } from 'vuex'
import { RootState } from '../types'
import GitUser from '@/models/IGitUser'

export const getters: GetterTree<GitUser, RootState> = {
  userInfo(state): GitUser {
    return state
  }
}
