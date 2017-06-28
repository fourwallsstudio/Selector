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
