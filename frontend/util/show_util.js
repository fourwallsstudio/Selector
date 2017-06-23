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

export const fetchAllShows = () => {
    return $.ajax({
    method: 'GET',
    url: '/api/shows'
  })
}

export const fetchSingleShow = id => {
    return $.ajax({
    method: 'GET',
    url: `/api/shows/${id}`,
  })
}

export const updateShow = (id, formData) => {
  debugger
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
