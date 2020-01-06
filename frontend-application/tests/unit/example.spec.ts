import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
  it('renders a property number', () => {
    const number = 3
    const wrapper = shallowMount(HelloWorld, {
      propsData: { number }
    })
    expect(wrapper.text()).to.include(number)
  })
})
