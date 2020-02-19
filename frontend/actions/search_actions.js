import { fetchSearchResults } from '../util/search_api_util';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';


/* action creators */

export const receiveSearchResults = payload => {

  return (

    {
      type: RECEIVE_SEARCH_RESULTS,
      payload
    }

  )
}



/* thunk action creator */

export const search = searchInput => dispatch => fetchSearchResults(searchInput)
  .then(
    payload => dispatch(receiveSearchResults(payload)),
    response => console.log('bad request', response.responseJSON)
  )


