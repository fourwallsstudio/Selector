json.array! @users do |user|
  json.extract! user, :id, :username, :email, :bio, :city, :country, :show_ids
  json.avatar_url asset_path(user.avatar.url(:original))
end
