import { shallowMount } from '@vue/test-utils'
import Flex from '../../src/components/flex/flex.vue'

describe('Flex.vue', () => {
  let wrapper
  afterEach(() => {
    wrapper.destroy()
  })
  test('create', () => {
    wrapper = shallowMount(Flex)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('direction', () => {
    ['column', 'row-reverse', 'column-reverse'].forEach(direction => {
      wrapper = shallowMount(Flex, {
        propsData: {
          direction
        }
      })
      expect(wrapper.classes()).toContain(`lz-flexbox-direction-${direction}`)
    })
  })

  test('wrap', () => {
    ['wrap', 'wrap-reverse'].forEach(wrap => {
      wrapper = shallowMount(Flex, {
        propsData: {
          wrap
        }
      })
      expect(wrapper.classes()).toContain(`lz-flexbox-${wrap}`)
    })
  })

  test('justify', () => {
    ['flex-end', 'center', 'space-between', 'space-around'].forEach(justify => {
      wrapper = shallowMount(Flex, {
        propsData: {
          justify
        }
      })
      expect(wrapper.classes()).toContain(`lz-flexbox-justify-${justify}`)
    })
  })

  test('align', () => {
    ['start', 'end', 'baseline', 'stretch'].forEach(align => {
      wrapper = shallowMount(Flex, {
        propsData: {
          align
        }
      })
      expect(wrapper.classes()).toContain(`lz-flexbox-align-${align}`)
    })
  })

  test('align-content', () => {
    ['start', 'end', 'center', 'space-between', 'space-around'].forEach(alignContent => {
      wrapper = shallowMount(Flex, {
        propsData: {
          alignContent
        }
      })
      expect(wrapper.classes()).toContain(`lz-flexbox-align-content-${alignContent}`)
    })
  })

  test('slot', () => {
    const msg = 'hello world'
    wrapper = shallowMount({
      template: `<lz-flex>
        <p>${msg}</p>
      </lz-flex>`
    })
    expect(wrapper.find('p').text()).toContain(msg)
  })
})
