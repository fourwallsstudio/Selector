export const UPDATE_FILTER = 'UPDATE_FILTER';


export const updateFilter = filter => {
  return {
    type: UPDATE_FILTER,
    filter
  }
}
