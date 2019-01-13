import { shallowMount } from '@vue/test-utils'
import Sidebar from '@/components/Sidebar.vue'

describe('Sidebar.vue', () => {
  it('is vue', () => {
    const wrapper = shallowMount(Sidebar)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
