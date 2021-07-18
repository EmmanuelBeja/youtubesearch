import * as types from '../actions/actionTypes'

const initialState = {
  results: [],
  pageInfo: undefined,
  regionCode: undefined,
  loading: false,
  errors: undefined,
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SEARCH_RESULTS_REQUEST:
      return {
        ...state,
        results: [],
        loading: true,
      }

    case types.GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.data.items,
        pageInfo: action.data.pageInfo,
        regionCode: action.data.regionCode,
        loading: false,
      }

    case types.GET_SEARCH_RESULTS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.error,
      }

    default:
      return state
  }
}

export default searchReducer
