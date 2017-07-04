export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const fetchUsers = showId => {
  return $.ajax({
    method: 'GET',
    url: `api/users`,
    data: { showId: showId }
  });
};

export const fetchUserFollowings = userId => {
  return $.ajax({
    method: 'GET',
    url: `api/users`,
    data: { userId: userId }
  });
};

export const editUser = (id, formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const searchUsers = search => {
  return $.ajax({
    method: 'GET',
    url: 'api/users/search',
    data: { search: search }
  })
}
