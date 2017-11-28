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
#  queue_items_count  :integer
#

require 'paperclip/media_type_spoof_detector'
module Paperclip
  class MediaTypeSpoofDetector
    def spoofed?
      false
    end
  end
end

class Show < ActiveRecord::Base
  include PgSearch
  pg_search_scope :whose_title_starts_with,
                  :against => :title,
                  :using => {
                    :tsearch => {:prefix => true}
                  }

  validates :title, :author, :audio, presence: true
  has_attached_file :image, default_url: "https://s3.us-east-2.amazonaws.com/imagehost1234/BlueSquiggle1.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: [ 'audio/mpeg',
    'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3',
    'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  has_many :queue_items, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :taggings, dependent: :destroy, inverse_of: :show
  has_many :tags, through: :taggings, source: :tag

  def self.most_recent
    order("created_at DESC").limit(10)
  end

  def self.trending
    select("shows.*, COUNT(*)")
      .joins(:queue_items)
      .group("shows.id")
      .order("COUNT(*) DESC")
      .limit(10)
  end

  def plays
    self.queue_items.size
  end

  def listeners
    listeners = {}

    self.queue_items.each do |q|
      listeners[q.user_id] = { id: q.user_id, user_avatar: User.find(q.user_id).avatar.url }
    end

    listeners
  end

  def favorite_ids
    favorites.map { |f| f.user_id }
  end
end
