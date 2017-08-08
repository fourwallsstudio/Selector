require "rails_helper"

RSpec.describe User, :type => :model do
  subject(:user) { User.new }

  it 'does not save without a username' do
    expect(user.save).to raise_error(StandardError)
  end
end
