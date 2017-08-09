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

require 'rails_helper'

RSpec.describe Comment, :type => :model do
  subject(:comment) { build(:comment) }

  it 'makes a comment' do
    expect(comment.new_record?).to be true
  end

  it 'has a user' do
    expect(comment.user.new_record?).to be true
  end

  it 'does not save a comment without a show_id' do
    expect(build(:comment, show_id: nil).save).to be false
  end
end
