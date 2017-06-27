export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const fetchUsers = users => {
  return $.ajax({
    method: 'GET',
    url: `api/users`
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
