export const createFollowing = following => {
  return $.ajax({
    method: 'POST',
    url: '/api/followings',
    data: { following: following }
  })
}

export const deleteFollowing = following => {
  return $.ajax({
    method: 'DELETE',
    url: `api/followings/${following.follower_id}`,
    data: { following: following }
  })
}
