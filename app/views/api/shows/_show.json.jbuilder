json.extract! show, :id, :title, :description
json.audio_url asset_path(show.audio.url(:original))
json.image_url asset_path(show.image.url(:original))
