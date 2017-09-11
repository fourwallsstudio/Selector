class Api::SessionsController < ApplicationController
  skip_before_action :require_logged_in, only: [:destroy]

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ['invalid username or password'], status: 401
    end
  end

  def destroy
    logout
    render json: {}
  end
end
