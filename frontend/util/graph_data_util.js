
export const fetchShowData = showId => {
  return $.ajax({
    method: 'GET',
    url: `api/graph_data/${showId}`
  })
}
