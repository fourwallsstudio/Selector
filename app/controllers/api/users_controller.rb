class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:update]

  def index
    if params[:showId]

      @show = Show.find(params[:showId].to_i)
      comment_users = @show.comments.map { |comment| User.find(comment.user_id) }
      listen_users = @show.listeners.map { |id| User.find(id) }
      @users = comment_users + listen_users

    elsif params[:userId]

      following_ids = User.find(params[:userId]).following_ids
      @users = following_ids.map { |id| User.find(id) }

    elsif params[:nonFollowingUserId]

      @users = User.find(params[:nonFollowingUserId]).non_followings

    else

      @users = User.all
    end
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


  def search
    @users = User.whose_name_starts_with(params["search"])
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :password,
      :email, :avatar, :bio, :city, :country)
  end
end
