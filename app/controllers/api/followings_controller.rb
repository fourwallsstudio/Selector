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
    @following = Following.find(params[:id])
    @following.destroy
    render :show
  end

  private

  def following_params
    params.required(:following).permit(:follower_id, :following_id)
  end

end
