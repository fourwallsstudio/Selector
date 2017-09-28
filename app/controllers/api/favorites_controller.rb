class Api::FavoritesController < ApplicationController

  def show
  end

  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render :show
    else
      render json: @favortie.errors.full_messages, status: 422
    end
  end

  def destroy
    user_id = params[:favorite][:user_id]
    show_id = params[:favorite][:show_id]
    @favorite = Favorite.find_by({ user_id: user_id, show_id: show_id })
    @favorite.destroy
    render :show
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :show_id)
  end
end
