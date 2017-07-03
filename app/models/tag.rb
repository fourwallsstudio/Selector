# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  genre      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base
  include PgSearch
  pg_search_scope :whose_genre_starts_with,
                  :against => :genre,
                  :using => {
                    :tsearch => {:prefix => true}
                  }

  validates :genre, presence: true, uniqueness: true

  has_many :taggings, dependent: :destroy, inverse_of: :tag
  has_many :shows, through: :taggings, source: :show

  def show_ids
    self.shows.map { |s| s.id }
  end
end
