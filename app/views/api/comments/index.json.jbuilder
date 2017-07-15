json.array! @comments do |comment|
  json.extract! comment, :id, :body, :user_id, :show_id,
    :parent_comment_id, :flagged, :created_at, :user_name, :user_avatar
end
