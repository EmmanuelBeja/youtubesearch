import React from 'react'
import { mount } from 'enzyme'
import Results from '../'
import { Provider } from 'react-redux'
import { emptyStore, loadingStore, populatedStore } from './MockStore'

describe('Results', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={emptyStore}>
        <Results />
      </Provider>
    )
    expect(wrapper.find('.results-container').length).toEqual(2)
  })

  it('should render NoDataIndication on emptyStore', () => {
    const wrapper = mount(
      <Provider store={emptyStore}>
        <Results />
      </Provider>
    )
    expect(wrapper.find('.data-empty').length).toEqual(1)
  })

  it('should render Loading on loadingStore', () => {
    const wrapper = mount(
      <Provider store={loadingStore}>
        <Results />
      </Provider>
    )
    expect(wrapper.find('.loading-container').length).toEqual(1)
  })

  it('should render VideoCard on populatedStore', () => {
    const wrapper = mount(
      <Provider store={populatedStore}>
        <Results />
      </Provider>
    )
    expect(wrapper.find('.video-card').length).toEqual(4)
  })

  it('should render ChannelCard on populatedStore', () => {
    const wrapper = mount(
      <Provider store={populatedStore}>
        <Results />
      </Provider>
    )
    expect(wrapper.find('.channel-card').length).toEqual(2)
  })
})
