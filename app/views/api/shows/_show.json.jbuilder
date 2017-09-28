json.extract! show, :id, :title, :description,
  :audio_file_size, :created_at, :plays, :listeners, :tag_ids, :favorite_ids
json.comments show.comment_ids
json.author_id show.author.id
json.author_username show.author.username
json.audio_url asset_path(show.audio.url(:original))
json.image_url asset_path(show.image.url(:original))
json.image_width show.image.width
json.image_height show.image.height
