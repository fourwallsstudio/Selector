json.array! @shows do |show|
  json.partial! 'api/shows/show', show: show
end
