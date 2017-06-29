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
#

class Show < ActiveRecord::Base
  include PgSearch
  pg_search_scope :whose_title_starts_with,
                  :against => :title,
                  :using => {
                    :tsearch => {:prefix => true}
                  }

  validates :title, :author, :audio, presence: true
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: [ 'audio/mpeg',
    'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3',
    'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  has_many :queue_items
  has_many :comments

  
  def self.most_recent
    order("created_at DESC").limit(10)
  end

  def comment_ids
    self.comments.map { |c| c.id }
  end

  def plays
    self.queue_items.length
  end

  def listeners
    listeners = []

    self.queue_items.each { |q| listeners << q.user_id }

    listeners.uniq
  end

end
