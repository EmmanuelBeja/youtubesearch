import configureStore from 'redux-mock-store'

const middlewares = [] // If you are not using any middleware, leave the array empty or import it and put it in
const mockStore = configureStore(middlewares) // Setting of store based on the middlewares.

// Create the store to pass as prop in the <Provider>
const emptyStore = mockStore({
  search: {
    results: [],
    loading: false,
  },
})

const loadingStore = mockStore({
  search: {
    results: [],
    loading: true,
  },
})

const populatedStore = mockStore({
  search: {
    results: [
      {
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
      },
      {
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
      },
      {
        kind: 'youtube#searchResult',
        etag: 'lPmaOPW81KWO9tVxJVqtxgx2KtE',
        id: {
          kind: 'youtube#video',
          videoId: '41tnjGqtaLc',
        },
        snippet: {
          publishedAt: '2021-02-16T09:21:35Z',
          channelId: 'UCuL8sQFLmewlFqYxDbO5aOg',
          title: 'Magical Kenya Signature Experiences Collection 2021-2022',
          description:
            'The Magic Beckons! From aquatic thrills to wild adventures, experience our latest additions to the #MagicalKenyaSignatureExperiences collection filled with ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/41tnjGqtaLc/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/41tnjGqtaLc/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/41tnjGqtaLc/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'MagicalKenya',
          liveBroadcastContent: 'none',
          publishTime: '2021-02-16T09:21:35Z',
        },
      },
    ],
    pageInfo: {
      totalResults: 1000000,
      resultsPerPage: 25,
    },
    loading: false,
  },
})

export { emptyStore, loadingStore, populatedStore }
