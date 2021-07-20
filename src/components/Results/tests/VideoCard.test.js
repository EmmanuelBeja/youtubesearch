import React from 'react'
import { mount } from 'enzyme'
import VideoCard from '../VideoCard'
import { Provider } from 'react-redux'
import { populatedStore } from './MockStore'

describe('VideoCard', () => {
  it('should call handleRedirectToChannel on mousedown', () => {
    const handleRedirectToChannel = jest.fn()
    const wrapper = mount(
      <Provider store={populatedStore}>
        <VideoCard
          data={{
            kind: 'youtube#searchResult',
            etag: 'ks1c11yUqX-SHMcZZQwV06nsOYE',
            id: {
              kind: 'youtube#video',
              videoId: 'KwwcopYH-JA',
            },
            snippet: {
              publishedAt: '2015-05-18T13:19:01Z',
              channelId: 'UCuL8sQFLmewlFqYxDbO5aOg',
              title: 'Enjoy immense possibilities of adventure in MagicalKenya...',
              description: '',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/KwwcopYH-JA/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/KwwcopYH-JA/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/KwwcopYH-JA/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'MagicalKenya',
              liveBroadcastContent: 'none',
              publishTime: '2015-05-18T13:19:01Z',
            },
          }}
          handleRedirectToChannel={handleRedirectToChannel}
        />
      </Provider>
    )
    wrapper.find('.card-content__subtitle').simulate('mousedown')
    expect(handleRedirectToChannel).toHaveBeenCalled()
  })

  it('should show dialog on card mousedown', () => {
    const handleRedirectToChannel = jest.fn()
    const wrapper = mount(
      <Provider store={populatedStore}>
        <VideoCard
          data={{
            kind: 'youtube#searchResult',
            etag: 'ks1c11yUqX-SHMcZZQwV06nsOYE',
            id: {
              kind: 'youtube#video',
              videoId: 'KwwcopYH-JA',
            },
            snippet: {
              publishedAt: '2015-05-18T13:19:01Z',
              channelId: 'UCuL8sQFLmewlFqYxDbO5aOg',
              title: 'Enjoy immense possibilities of adventure in MagicalKenya...',
              description: '',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/KwwcopYH-JA/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/KwwcopYH-JA/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/KwwcopYH-JA/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'MagicalKenya',
              liveBroadcastContent: 'none',
              publishTime: '2015-05-18T13:19:01Z',
            },
          }}
          handleRedirectToChannel={handleRedirectToChannel}
        />
      </Provider>
    )

    expect(wrapper.find('.dialog-card').length).toEqual(0)
    wrapper.find('.video-card').first().simulate('mousedown')
    expect(wrapper.find('.dialog-card').length).toEqual(2)
  })
})
