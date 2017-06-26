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

require 'test_helper'

class QueueItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
