class Api::QueueItemsController < ApplicationController

  def show
  end

  def create
    @queue_item = QueueItem.new(queue_item_params)

    if @queue_item.save
      render :show
    else
      render json: @queue_item.errors.full_messages, status: 422
    end
  end

  # def update
  #   @queue_item = QueueItem.find(:id)
  #   if @queue_item.update(queue_item_params)
  #
  #   else
  #     render json: @queue_item.errors.full_messages, status: 422
  #   end
  # end

  def destroy
    # debugger
    @queue_item = QueueItem.find(params[:id])
    @queue_item.destroy
    render :show
  end

  private

  def queue_item_params
    params.require(:queue_item).permit(:user_id, :show_id, :seek)
  end
end
