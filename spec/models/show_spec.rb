# == Schema Information
#
# Table name: shows
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  description        :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  author_id          :integer          not null
#  audio_file_name    :string           not null
#  audio_content_type :string           not null
#  audio_file_size    :integer          not null
#  audio_updated_at   :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  image_meta         :text
#

require 'rails_helper'

RSpec.describe Show, :type => :model do
  subject(:show) { build(:show) }

  it 'makes a show record' do
    expect(show.new_record?).to be true
  end

  it 'saves a show with vaild params' do
    expect(show.save).to be true
  end

  it 'makes a show with comments' do
    expect(show.comments.length).to eq(5)
  end
end
