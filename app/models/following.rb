# == Schema Information
#
# Table name: followings
#
#  id           :integer          not null, primary key
#  follower_id  :integer          not null
#  following_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Following < ActiveRecord::Base
  validates :follower_id, :following_id, presence: true
  validates :follower_id, uniqueness: { scope: :following_id }

  belongs_to :follower,
    class_name: :User,
    foreign_key: :follower_id

  belongs_to :following,
    class_name: :User,
    foreign_key: :following_id
end
