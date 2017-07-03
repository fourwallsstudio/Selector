
export const createQueueItem = queueItem => {
  return $.ajax({
    method: 'POST',
    url: '/api/queue_items',
    dataType: 'json',
    data: { queue_item: queueItem }
  })
};

export const updateQueueItem = queueItem => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/queue_items/${queueItem.id}`,
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
