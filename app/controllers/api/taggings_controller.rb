class Api::TaggingsController < ApplicationController

  def show
  end

  def create
    @tagging = Tagging.new(taggings_params)

    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def destroy
    @tagging = Tagging.find(params[:id])
    @tagging.destroy
    render :show
  end

  private

  def taggings_params
    params.require(:tagging).permit(:show_id, :tag_id)
  end
end
