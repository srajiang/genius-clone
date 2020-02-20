
export const UPDATE_SEARCH_STATE = 'UPDATE_SEARCH_STATE';
export const UPDATE_SESSION_MENU_STATE = 'UPDATE_SESSION_MENU_STATE';


export const updateSearchBarState = isActive => {

  return ({

    type: UPDATE_SEARCH_STATE,
    isActive 

  })

}


export const updateSessionMenuState = isActive => {

  return (
    {
      type: UPDATE_SESSION_MENU_STATE,
      isActive
    }
  )

}