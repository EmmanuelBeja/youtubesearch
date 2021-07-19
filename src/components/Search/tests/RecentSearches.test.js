import React from 'react'
import { mount } from 'enzyme'
import RecentSearches from '../RecentSearches'
import { Provider } from 'react-redux'
import store from '../../../store'

describe('RecentSearches', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <RecentSearches searches={[]} handleClick={() => {}} />
      </Provider>
    )
    expect(wrapper).toBeTruthy()
  })

  it('should render 0 recent searches when 0 recent searches were made', () => {
    const wrapper = mount(
      <Provider store={store}>
        <RecentSearches searches={[]} handleClick={() => {}} />
      </Provider>
    )
    expect(wrapper.find('.autocomplete__item').length).toEqual(0)
  })

  it('should have d-none className when 0 recent searches were made', () => {
    const wrapper = mount(
      <Provider store={store}>
        <RecentSearches searches={[]} handleClick={() => {}} />
      </Provider>
    )
    expect(wrapper.find('.d-none').length).toEqual(1)
  })

  it('should have search__autocomplete className when >1 recent searches were made', () => {
    const wrapper = mount(
      <Provider store={store}>
        <RecentSearches searches={['hey', 'hello']} handleClick={() => {}} />
      </Provider>
    )
    expect(wrapper.find('.search__autocomplete').length).toEqual(1)
  })

  it('should render 2 recent searches when 2 recent searches were made', () => {
    const wrapper = mount(
      <Provider store={store}>
        <RecentSearches searches={['hey', 'hello']} handleClick={() => {}} />
      </Provider>
    )
    expect(wrapper.find('.autocomplete__item').length).toEqual(2)
  })
})
