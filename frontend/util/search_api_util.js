export const fetchSearchResults = searchInput => (

  $.ajax({
    method: 'GET',
    url:  `api/searches/?input=${searchInput}`
  })

)