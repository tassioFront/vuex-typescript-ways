import { ActionTree } from 'vuex'
import axios from 'axios'
import { ProfileState } from './types'
import { RootState } from '../types'
import GitUser from '@/models/IGitUser'

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData ({ commit }): void {
    axios({
      url: 'https://api.github.com/users/tassioFront'
    }).then((response) => {
      const payload: GitUser = response.data
      commit('profileLoaded', payload)
    }, (erro) => {
      console.error(erro)
    })
  }
}
