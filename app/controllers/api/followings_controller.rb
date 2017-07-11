class Api::FollowingsController < ApplicationController

  def show
  end

  def create
    @following = Following.new(following_params)

    if @following.save
      render :show
    else
      render json: @following.errors.full_messages, status: 422
    end
  end

  def destroy
    follower_id = params[:following][:follower_id]
    following_id = params[:following][:following_id]
    @following = Following.where("follower_id = #{follower_id} AND following_id = #{following_id}").first
    @following.destroy
    render :show
  end

  private

  def following_params
    params.required(:following).permit(:follower_id, :following_id)
  end

end
