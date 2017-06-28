class Api::UsersController < ApplicationController

  def index
    @show = Show.find(params[:showId].to_i)

    comment_users = @show.comments.map do |comment|
      User.find(comment.user_id)
    end

    listen_users = @show.listeners.map do |id|
      User.find(id)
    end

    @users = comment_users + listen_users
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user

    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password,
      :email, :avatar, :bio, :city, :country)
  end
end
