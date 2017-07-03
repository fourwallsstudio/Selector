json.array! @tags do |tag|
  json.extract! tag, :id, :genre, :show_ids
end
