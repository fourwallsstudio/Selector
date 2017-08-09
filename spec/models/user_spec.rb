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

require 'rails_helper'

RSpec.describe User, :type => :model do
  subject(:user) { build(:user) }

  it { should validate_presence_of(:username) }
  it { should validate_uniqueness_of(:username) }
  it { should validate_presence_of(:email) }
  it { should validate_uniqueness_of(:email) }
  it { should validate_length_of(:password) }
  it { should have_many(:shows) }
  it { should have_many(:queue_items) }
  it { should have_many(:comments) }
  it { should have_many(:followers) }
  it { should have_many(:followings) }


  it 'saves with vaild params' do
    expect(user.save).to be true
  end

  it 'has commments' do
    expect(create(:user_with_comments).comments.length).to eq(5)
  end

  it 'has 15 commments' do
    loud_user = create(:user_with_comments, comments_count: 15)
    expect(loud_user.comments.length).to eq(15)
  end

  it 'has commments with same :show_id' do
    show_comments = []
    5.times { show_comments << create(:comment, show_id: 1) }
    user.comments = show_comments
    comments_show_ids = user.comments.map { |c| c.show_id }
    expect(comments_show_ids).to contain_exactly(1, 1, 1, 1, 1)
  end

  it 'has a bio, city, and country' do
    user_w_traits = build(:user, :bio, :city, :country)
    expect(user_w_traits).to respond_to(:bio)
    expect(user_w_traits).to respond_to(:city)
    expect(user_w_traits).to respond_to(:country)
  end

  it 'has an avatar' do
    expect(build(:user, :avatar)).to respond_to(:avatar)
  end

  it 'has #followers_ids' do
    expect(user).to respond_to(:followers_ids)
  end

  it 'has followings' do
    user_with_followings = create(:user_with_followings)
    expect(user_with_followings.followings.length).to eq(5)
  end

  it 'has followers' do
    user_with_followers = create(:user_with_followers)
    expect(user_with_followers.followers.length).to eq(5)
  end

  describe '.find_by_credentials' do
    it 'finds an existing user' do
      user.save
      result = User.find_by_credentials(user.username, user.password)
      expect(result).to eq(user)
    end

    it 'returns nil when a user does not exist' do
      result = User.find_by_credentials('no_name', 'no_password')
      expect(result).to be_nil
    end
  end

  describe '#valid_password?' do
    it 'validates correct password' do
      expect(user.valid_password?(user.password)).to be true
    end

    it 'does not validate incorrect password' do
      expect(user.valid_password?('1234')).to be false
    end
  end

  describe '#reset_session_token!' do
    it 'resets the user session token' do
      user.save
      before = user.session_token
      after = user.reset_session_token!

      expect(before).not_to eq(after)
      expect(user.session_token).to eq(after)
    end
  end

  describe '#show_ids' do
    it 'returns an array of associated show ids' do
      shows = []
      5.times { |i| shows << build_stubbed(:show, id: i) }
      user.shows = shows
      
      expect(user.show_ids).to match([0, 1, 2, 3, 4])
    end
  end
end
