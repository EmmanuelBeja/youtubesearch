import React from 'react'
import { mount } from 'enzyme'
import SearchInput from '../SearchInput'
import { Provider } from 'react-redux'
import store from '../../../store'

describe('SearchInput', () => {
  const wrapper = mount(
    <Provider store={store}>
      <SearchInput />
    </Provider>
  )

  it('should render a SearchInput', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })

  it('should render a SearchInput with a placeholder', () => {
    expect(wrapper.find('input').props().placeholder).toEqual('Type here...')
  })

  it('should render a SearchInput with a className', () => {
    expect(wrapper.find('input').props().className).toEqual('form-control')
  })

  it('should render a SearchInput with a type', () => {
    expect(wrapper.find('input').props().type).toEqual('text')
  })

  it('should update input value onChange', () => {
    expect(wrapper.find('input').props().value).toEqual('')
    wrapper.find('input').simulate('change', {
      target: { value: 'hello' },
    })
    expect(wrapper.find('input').props().value).toEqual('hello')
  })

  it('should toggle RecentSearches component onFocus and onBlur', () => {
    expect(wrapper.find('.recent').length).toEqual(0)
    wrapper.find('input').simulate('focus')
    expect(wrapper.find('.recent').length).toEqual(1)
    wrapper.find('input').simulate('blur')
    expect(wrapper.find('.recent').length).toEqual(0)
  })
})
