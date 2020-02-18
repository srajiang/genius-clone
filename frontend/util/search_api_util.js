export const fetchSearchResults = searchInput => {

  $.ajax({
    method: 'GET',
    url:  `api/search/?input=${searchInput}`
  })

}