FactoryGirl.define do
	factory :user do
		sequence(:username) { Faker::Name.name }
    sequence(:email) { Faker::Internet.email }
    sequence(:password) { Faker::Internet.password }

    trait :bio do
      sequence(:bio) { Faker::TwinPeaks.quote }
    end

    trait :city do
      sequence(:city) { Faker::Address.city }
    end

    trait :country do
      sequence(:country) { Faker::Address.country }
    end

		trait :avatar do
			avatar { File.new(Rails.root.join('app', 'assets', 'images', 'default_bg.jpg')) }
		end

    factory :user_with_comments do
      transient do
        comments_count 5
      end

      after(:create) do |user, evaluator|
        create_list(:comment, evaluator.comments_count, user: user)
      end
    end

    factory :user_with_followings do
      transient do
        followings_count 5
      end

      after(:create) do |user, evaluator|
        create_list(:following, evaluator.followings_count, follower: user)
      end
    end

    factory :user_with_followers do
      transient do
        followers_count 5
      end

      after(:create) do |user, evaluator|
        create_list(:following, evaluator.followers_count, following: user)
      end
    end

		factory :user_with_shows do
			transient do
				shows_count 5
			end

			after(:create) do |user, evaluator|
				create_list(:show, evaluator.shows_count, author: user)
			end
		end

	end
end
