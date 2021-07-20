import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../Loading'

describe('Loading', () => {
  const shallowWrapper = shallow(<Loading />)

  it('should render correctly', () => {
    expect(shallowWrapper).toMatchSnapshot()
    expect(shallowWrapper.find('.loading-container').length).toEqual(1)
    expect(shallowWrapper.find('.loading-img').length).toEqual(1)
  })
})
