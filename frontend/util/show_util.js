
export const uploadShow = show => {
    debugger
    return $.ajax({
    method: 'POST',
    url: '/api/shows',
    processData: false,
    contentType: false,
    data: show
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
