
export const createQueueItem = queueItem => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/queue_items',
    dataType: 'json',
    data: { queue_item: queueItem }
  })
};


export const deleteQueueItem = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/queue_items/${id}`
  })
}
