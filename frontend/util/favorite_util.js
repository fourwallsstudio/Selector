export const createFavorite = (favorite) => {
  return $.ajax({
    method: 'POST',
    url: '/api/favorites',
    data: { favorite }
  })
}

export const deleteFavorite = (favorite) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${favorite.user_id}`,
    data: { favorite }
  })
}
