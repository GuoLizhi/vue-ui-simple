import { shallowMount } from '@vue/test-utils'
import WingBlank from '../../src/components/wing-blank/index'

describe('wing-blank.vue', () => {
  let wrapper = null
  afterEach(() => {
    wrapper.destroy()
  })
  test('render', () => {
    wrapper = shallowMount(WingBlank)
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.classes()).toContain('lz-wingblank')
    expect(wrapper.classes()).toContain('lz-wingblank-lg')
  })

  test('size', () => {
    ['lg', 'sm', 'md'].forEach(size => {
      wrapper = shallowMount(WingBlank, {
        propsData: { size }
      })
      expect(wrapper.classes()).toContain(`lz-wingblank-${size}`)
    })
  })
})
