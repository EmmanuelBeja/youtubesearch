import React from 'react'
import { mount } from 'enzyme'
import ChannelCard from '../ChannelCard'
import { Provider } from 'react-redux'
import { populatedStore } from './MockStore'

describe('ChannelCard', () => {
  it('should call handleRedirectToChannel on mousedown', () => {
    const handleRedirectToChannel = jest.fn()
    const wrapper = mount(
      <Provider store={populatedStore}>
        <ChannelCard
          data={{
            kind: 'youtube#searchResult',
            etag: 'YxHKw9uJQPHzxVbqVxZ-2yHVuI0',
            id: {
              kind: 'youtube#channel',
              channelId: 'UCuL8sQFLmewlFqYxDbO5aOg',
            },
            snippet: {
              publishedAt: '2008-01-16T14:56:29Z',
              channelId: 'UCuL8sQFLmewlFqYxDbO5aOg',
              title: 'MagicalKenya',
              description:
                'The Official Kenya Tourism Channel on YouTube - Brought to you by the Kenya Tourism Board.',
              thumbnails: {
                default: {
                  url:
                    'https://yt3.ggpht.com/ytc/AKedOLQd9ysAHjGvmfHfIb4X2T80SBKxQJpQhsgQHpPXiQ=s88-c-k-c0xffffffff-no-rj-mo',
                },
                medium: {
                  url:
                    'https://yt3.ggpht.com/ytc/AKedOLQd9ysAHjGvmfHfIb4X2T80SBKxQJpQhsgQHpPXiQ=s240-c-k-c0xffffffff-no-rj-mo',
                },
                high: {
                  url:
                    'https://yt3.ggpht.com/ytc/AKedOLQd9ysAHjGvmfHfIb4X2T80SBKxQJpQhsgQHpPXiQ=s800-c-k-c0xffffffff-no-rj-mo',
                },
              },
              channelTitle: 'MagicalKenya',
              liveBroadcastContent: 'none',
              publishTime: '2008-01-16T14:56:29Z',
            },
          }}
          handleRedirectToChannel={handleRedirectToChannel}
        />
      </Provider>
    )
    wrapper.find('.channel-card-container').first().simulate('mousedown')
    expect(handleRedirectToChannel).toHaveBeenCalled()
  })
})
