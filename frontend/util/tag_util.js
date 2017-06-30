export const fetchTag = id => {
  return $.ajax({
    method: 'GET',
    url: `api/tags/${id}`
  });
};

export const fetchAllTags = () => {
  return $.ajax({
    method: 'GET',
    url: `api/tags/`
  });
};

export const searchTags = search => {
  return $.ajax({
    method: 'GET',
    url: 'api/tags/search',
    data: { search: search }
  })
}
