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

require 'test_helper'

class ShowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
