# == Schema Information
#
# Table name: comments
#
#  id                :integer          not null, primary key
#  body              :text             not null
#  show_id           :integer          not null
#  user_id           :integer          not null
#  flagged           :boolean          default("false")
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  parent_comment_id :integer
#

class Comment < ActiveRecord::Base
  validates :body, :show, :user, presence: true

  belongs_to :show
  belongs_to :user
end
