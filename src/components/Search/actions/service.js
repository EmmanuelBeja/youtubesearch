import axios from 'axios'

const getSearchResults = (queryValue) =>
  axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${queryValue}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    )
    .then((res) => res.data)

export const searchService = {
  getSearchResults,
}
