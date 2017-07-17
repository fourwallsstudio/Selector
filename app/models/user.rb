# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  email               :string           not null
#  session_token       :string           not null
#  password_digest     :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  bio                 :text
#  city                :string
#  country             :string
#

class User < ActiveRecord::Base
  include PgSearch
  pg_search_scope :whose_name_starts_with,
                  :against => :username,
                  :using => {
                    :tsearch => {:prefix => true}
                  }

  attr_reader :password

  validates :username, :email,
    :session_token, :password_digest, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :shows,
    class_name: :Show,
    foreign_key: :author_id,
    primary_key: :id

  has_many :queue_items
  has_many :comments

  has_many :followers,
    class_name: :Following,
    foreign_key: :following_id

  has_many :followings,
    class_name: :Following,
    foreign_key: :follower_id

  has_attached_file :avatar, default_url: "default_bg.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token


  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def show_ids
    ids = []

    self.shows.each do |show|
      ids << show.id
    end

    ids
  end

  def queue_hash_by_show
    recent_queue = Hash.new()

    self.queue_items.each do |q|
      if !recent_queue[q.show_id] ||
        q.created_at > recent_queue[q.show_id].created_at

        recent_queue[q.show_id] = q
      end
    end

    recent_queue
  end

  def play_history
    queue_hash_by_show
  end

  def followers_ids
    self.followers.map { |f| f.follower_id }
  end

  def followings_ids
    self.followings.map { |f| f.following_id }
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
