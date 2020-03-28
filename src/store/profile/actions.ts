import { ActionTree } from 'vuex'
import axios from 'axios'
import { ProfileState, User } from './types'
import { RootState } from '../types'

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData ({ commit }): any {
    axios({
      url: 'https://api.github.com/users/tassioFront'
    }).then((response) => {
      const payload: User = response.data
      commit('profileLoaded', payload)
    }, () => {
      commit('profileError')
    })
  }
}
