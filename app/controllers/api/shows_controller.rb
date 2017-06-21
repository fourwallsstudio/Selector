class Api::ShowsController < ApplicationController

  def index
    @shows = Show.all
  end

  def show
    @show = Show.find(params[:id])
  end

  def create
    @show = Show.new(show_params)
    @show.author_id = current_user.id

    if @show.save
      render :show
    else
      render json: @show.errors.full_messages, status: 422
    end
  end

  def update
    @show = current_user.shows.find(params[:id])

    if @show.update_attributes(show_params)
      render :show
    else
      render json: @show.errors.full_messages, status: 422
    end
  end

  def destroy
    @show = current_user.shows.find(params[:id])
    @show.destroy
    render :index
  end

  private

  def show_params
    params.require(:show).permit(:title, :audio, :image, :description)
  end

end
