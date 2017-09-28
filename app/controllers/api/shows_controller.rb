class Api::ShowsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    case params["filter"]

    when "most_recent"
      @shows = Show.most_recent
    when "trending"
      @shows = Show.trending
    when "favorites"
      @shows = current_user.favorite_shows
    when "tag"
      @shows = Tag.find(params["tagId"].to_i).shows
    when "main_feed"
      followings = current_user.followings
      @shows = followings.inject([]) { |arr, f| arr + f.shows }
    else
      @shows = User.find(params["filter"].to_i).shows
    end
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

    if @show.update(show_params)
      render :show
    else
      render json: @show.errors.full_messages, status: 422
    end
  end

  def destroy
    @show = current_user.shows.find(params[:id])
    @show.destroy
    render :show
  end

  def search
    @shows = Show.whose_title_starts_with(params["search"])
    render :index
  end

  private

  def show_params
    params.require(:show).permit(:title, :audio, :image, :description, tag_ids: [])
  end

end
