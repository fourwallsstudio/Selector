json.extract! user, :id, :username, :email, :bio, :city, :country, :show_ids
json.avatar_url asset_path(user.avatar.url(:original))
# json.queue user.queue do |queue_item|
#   json.extract! queue_item, :id, :show_id, :user_id, :seek
# end
