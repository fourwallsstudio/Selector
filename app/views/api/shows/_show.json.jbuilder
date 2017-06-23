json.extract! show, :id, :title, :description, :audio_file_size, :created_at
json.author_id show.author.id
json.author_username show.author.username
json.audio_url asset_path(show.audio.url(:original))
json.image_url asset_path(show.image.url(:original))
