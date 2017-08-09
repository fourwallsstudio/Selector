FactoryGirl.define do
  factory :following do
    association :follower, factory: :user
    association :following, factory: :user
  end
end
