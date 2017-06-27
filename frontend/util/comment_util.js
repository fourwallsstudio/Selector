export const createComment = comment => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    dataType: 'json',
    data: { comment: comment }
  })
};


export const deleteComment = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`
  })
}
