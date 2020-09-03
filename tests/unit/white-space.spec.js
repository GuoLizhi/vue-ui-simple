import { shallowMount } from '@vue/test-utils'
import WhiteSpace from '../../src/components/white-space/white-space.vue'

describe('wing-blank.vue', () => {
  let wrapper = null
  afterEach(() => {
    wrapper.destroy()
  })
  test('render', () => {
    wrapper = shallowMount(WhiteSpace)
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.classes()).toContain('lz-white-space-md')
  })

  test('size', () => {
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      wrapper = shallowMount(WhiteSpace, {
        propsData: { size }
      })
      expect(wrapper.classes()).toContain(`lz-white-space-${size}`)
    })
  })
})
