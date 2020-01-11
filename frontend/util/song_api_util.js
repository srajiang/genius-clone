export const fetchSongs = (genre) => (

  $.ajax({

    method: "GET",
    url: `api/songs/?genre=${genre}`,
  })
)

export const fetchSong = songId => (

  $.ajax({

    method: "GET",
    url: `api/songs/${songId}`,

  })
)

export const createSong = song => (

  $.ajax({

    method: "POST",
    url: `api/songs/`,
    data: { song: song },

  })
)

export const updateSong = song => (

  $.ajax({

    method: "PATCH",
    url: `api/songs/${song.id}`,
    data: { song: song },

  })
)

export const deleteSong = songId => (

  $.ajax({

    method: "DELETE",
    url: `api/songs/${songId}`

  })
)


