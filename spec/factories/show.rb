FactoryGirl.define do
	factory :show do
    title "test_show"
		audio { File.new(Rails.root.join('app', 'assets', 'audio', 'Best Friend.mp3')) }
    association :author, factory: :user

    factory :show_with_comments do
      transient do
        comments_count 5
      end

      after(:create) do |show, evaluator|
        create_list(:comment, evaluator.comments_count, show_id: show.id)
      end
    end
	end
end
