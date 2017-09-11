# == Schema Information
#
# Table name: queue_items
#
#  id         :integer          not null, primary key
#  show_id    :integer          not null
#  user_id    :integer          not null
#  seek       :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class QueueItem < ActiveRecord::Base
  validates :show_id, :user_id, presence: true
  # validates :show_id, uniqueness: { scope: :user_id }

  belongs_to :show, counter_cache: true
  belongs_to :user
end
