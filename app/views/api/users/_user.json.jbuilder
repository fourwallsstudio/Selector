json.extract! user, :id, :username, :email, :bio, :city,
  :country, :show_ids, :follower_ids, :following_ids, :play_history
json.avatar_url asset_path(user.avatar.url(:original))
