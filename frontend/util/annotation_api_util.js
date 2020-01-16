export const fetchAnnotations = songId => (

  $.ajax({

    method: "GET",
    url: `api/annotations/?songId=${songId}`

  })
)

export const createAnnotation = annotation => (

  $.ajax({

    method: "POST",
    url: `api/annotations/`,
    data: { annotation: annotation }

  })
)

export const deleteAnnotation = annotationId => (

  $.ajax({

    method: "DELETE",
    url: `api/annotations/${annotationId}`

  })

)

export const updateAnnotation = annotation => (

  $.ajax({

    method: "PATCH",
    url: `api/annotations/${annotation.id}`,
    data: { annotation: annotation }

  })

)
