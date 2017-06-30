# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  tag_id     :integer          not null
#  show_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ActiveRecord::Base
  validates :tag, :show, presence: true
  validates :tag_id, uniqueness: { scope: :show_id }

  belongs_to :tag
  belongs_to :show
end
