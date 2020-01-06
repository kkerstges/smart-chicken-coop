import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// ToDo Unit Tests are Broken due to https://github.com/vuetifyjs/vue-cli-plugin-vuetify/issues/101
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
