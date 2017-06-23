
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

export const deleteShow = id => {
    return $.ajax({
    method: 'DELETE',
    url: `/api/shows/${id}`,
  })
}
