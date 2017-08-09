FactoryGirl.define do
	factory :comment do
    body "test cooooOOOooooOOOoll"
    user
		sequence(:show_id)
	end
end
