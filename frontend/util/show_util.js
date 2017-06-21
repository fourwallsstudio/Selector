
export const uploadShow = show => {
  return $.ajax({
    method: 'POST',
    url: '/api/shows',
    data: { show: show }
  })
}
