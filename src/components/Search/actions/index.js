import * as types from './actionTypes'
import { searchService } from './service'
import { toast } from 'react-toastify'

const request = (data, type) => ({ type, data })
const success = (data, type) => ({ type, data })
const failure = (error, type) => ({ type, error })

const getSearchResults = (data) => {
  return (dispatch) => {
    dispatch(request(null, types.GET_SEARCH_RESULTS_REQUEST))
    searchService.getSearchResults(data).then(
      (res) => {
        const { items, pageInfo, regionCode } = res
        dispatch(success({ items, pageInfo, regionCode }, types.GET_SEARCH_RESULTS_SUCCESS))
      },
      (error) => {
        toast.error(error?.response?.data?.message)
        dispatch(failure(error.response.data.message, types.GET_SEARCH_RESULTS_FAILED))
      }
    )
  }
}

export const searchActions = {
  getSearchResults,
}
