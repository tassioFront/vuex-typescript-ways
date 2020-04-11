import Vuex from 'vuex'
import { getters } from '@/store/profile/getters'
import { ProfileState } from '@/store/profile/types'

import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
import HelloClass from '@/components/HelloClass.vue'
import { gitUserMock } from '@/mocks/gitUser'

const localVue = createLocalVue()
localVue.use(Vuex)

const state: ProfileState = {
  user: gitUserMock
}

const actions = {
  fetchData: jest.fn()
}

const store = new Vuex.Store({
  modules: {
    profile: {
      namespaced: true,
      state,
      getters,
      actions
    }
  }
})

let wrapper: Wrapper<Vue>

beforeEach(() => {
  wrapper = shallowMount(HelloClass, {
    store,
    localVue
  })
})

describe('HelloClass component', () => {
  it('renders components', () => {
    expect(wrapper.isVisible())
  })
  it('call fetchData', () => {
    expect(actions.fetchData).toHaveBeenCalled()
  })

  it('getter userInfor is computing', () => {
    expect(getters.userInfo(state, [], { version: '1' }, [])).toBe(
      `${state.user.name} from ${state.user.company}`
    )
  })
})
