import Vuex from 'vuex'
import { getters } from '@/store/profile/getters'
import { RootState } from '@/store/types'
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
import HelloClass from '@/components/HelloClass.vue'
import { gitUserMock } from './mock'

const localVue = createLocalVue();
localVue.use(Vuex);

const state = gitUserMock

const actions = {
    fetchData: jest.fn()
};

const store = new Vuex.Store({
    modules: {
        profile: {
            state,
            namespaced: true,
            actions,
            getters
        }
    }
});

let wrapper: Wrapper<any>;

beforeEach(() => {
  wrapper = shallowMount(HelloClass, {
    store,
    localVue
  })
})

describe('HelloWorld.vue', () => {
  it('renders components', () => {
    expect(wrapper.isVisible())
  })
  it('call fetchData', () => {
    expect(actions.fetchData).toHaveBeenCalled();
  })

  it('getter userInfor is computing', () => {
    expect(getters.userInfor(state, [], RootState, [] ));
  })


})
