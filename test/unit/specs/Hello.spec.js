import Vue from 'vue'
import Timeline from '@/components/Timeline'

describe('Timeline.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Timeline)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.timeline table thead tr th').textContent)
    .to.equal('About')
  })
})
