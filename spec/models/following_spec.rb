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

require 'rails_helper'

RSpec.describe Following do
  subject(:following) { build(:following) }

  it 'creates a following record' do
    expect(following.new_record?).to be true
  end
end
