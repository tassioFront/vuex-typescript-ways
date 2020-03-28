import { GetterTree } from 'vuex'
import { ProfileState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<ProfileState, RootState> = {
  userInfo (state): string {
    const { user } = state
    const name = (user && user.name) || 'someone'
    const company = (user && user.company) || 'someplace'
    return `${name} from ${company}`
  }
}
