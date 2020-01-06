import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe('App.vue', () => {
  it('menue close', () => {
    const wrapper = shallowMount(App)
    const menue = wrapper.find({ name: 'v-navigation-drawer' })
    expect(menue).to.be('undefinded')
  })
})
