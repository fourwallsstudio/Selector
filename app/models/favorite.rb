# == Schema Information
#
# Table name: favorites
#
#  id         :integer          not null, primary key
#  show_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favorite < ActiveRecord::Base
  validates :show_id, :user_id, presence: true
  validates :show_id, uniqueness: { scope: :user_id }

  belongs_to :show, foreign_key: :show_id
  belongs_to :user, foreign_key: :user_id
end
