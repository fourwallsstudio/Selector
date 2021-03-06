json.array! @users do |user|
  json.extract! user, :id, :username, :email, :bio, :city, :country, :show_ids,
  :follower_ids, :following_ids, :play_history, :favorite_ids
  json.avatar_url asset_path(user.avatar.url(:original))
  json.image_width user.avatar.width
  json.image_height user.avatar.height
end
