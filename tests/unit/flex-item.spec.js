import { shallowMount } from '@vue/test-utils'
import FlexItem from '../../src/components/flex-item/'

describe('flex-item.vue', () => {
  test('slot', () => {
    const msg = 'hello world'
    const wrapper = shallowMount({
      template: `<lz-flex-item>
        <div>${msg}</div>
      </lz-flex-item>`,
      component: {
        FlexItem
      }
    })
    expect(wrapper.find('div').text()).toBe(msg)
  })
})
