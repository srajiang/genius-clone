export const fetchReferents = songId => (

  $.ajax({

    method: "GET",
    url: `api/referents/?songId=${songId}`

  })
)


export const createReferent = referent => {

  $.ajax({

    method: "POST",
    url: `api/referents/`,
    data: { referent: referent }

  })
}