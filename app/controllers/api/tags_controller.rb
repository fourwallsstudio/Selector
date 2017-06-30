class Api::TagsController < ApplicationController

  def index
    @tags = Tag.all
  end

  def show
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def search
    @tags = Tag.whose_genre_starts_with(params["search"])
    render :index
  end

  private

  def tag_params
    params.require(:tag).permit(:genre)
  end
end
