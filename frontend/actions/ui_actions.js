
export const UPDATE_SEARCH_STATE = 'UPDATE_SEARCH_STATE'

export const updateSearchBarState = isActive => {

  return ({

    type: UPDATE_SEARCH_STATE,
    isActive 

  })

}
