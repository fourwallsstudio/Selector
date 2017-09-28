# == Schema Information
#
# Table name: favorites
#
#  id         :integer          not null, primary key
#  show_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :favorty, class: 'Favortie' do
    
  end
end
