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

export const editUser = user => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user: user }
  });
};
