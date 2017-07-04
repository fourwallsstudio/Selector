export const createFollowing = following => {
  return $.ajax({
    method: 'POST',
    url: '/api/followings',
    data: { following: following }
  })
}

export const deleteFollowing = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/followings/${id}`
  })
}
