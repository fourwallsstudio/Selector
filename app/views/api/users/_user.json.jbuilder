json.extract! user, :id, :username, :email
json.avatar_url asset_path(user.avatar.url(:original))
