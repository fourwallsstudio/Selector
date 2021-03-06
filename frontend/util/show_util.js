export const uploadShow = formData => {
  return $.ajax({
    method: 'POST',
    url: '/api/shows',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
}


export const fetchAllShows = filter => {
    return $.ajax({
    method: 'GET',
    url: '/api/shows',
    data: { filter: filter }
  })
}

export const fetchShowsByTag = tagId => {
  return $.ajax({
    method: 'GET',
    url: '/api/shows',
    data: { filter: "tag", tagId: tagId }
  })
}

export const fetchSingleShow = id => {
    return $.ajax({
    method: 'GET',
    url: `/api/shows/${id}`,
  })
}

export const updateShow = (id, formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/shows/${id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
}

export const deleteShow = id => {
    return $.ajax({
    method: 'DELETE',
    url: `/api/shows/${id}`,
  })
}

export const searchShows = search => {
  return $.ajax({
    method: 'GET',
    url: 'api/shows/search',
    data: { search: search }
  })
}
