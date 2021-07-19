import React from 'react'
import { shallow, mount } from 'enzyme'
import Search from '../'
import SearchInput from '../SearchInput'
import { Provider } from 'react-redux'
import store from '../../../store'

describe('Search', () => {
  const shallowWrapper = shallow(<Search />)
  const mountWrapper = mount(
    <Provider store={store}>
      <Search />
    </Provider>
  )

  it('should render correctly', () => {
    expect(shallowWrapper).toMatchSnapshot()
    expect(shallowWrapper.find('.fixed-top').length).toEqual(1)
  })

  it('should contain SearchInput component', () => {
    expect(mountWrapper.find(<SearchInput />)).toBeTruthy()
  })
})
