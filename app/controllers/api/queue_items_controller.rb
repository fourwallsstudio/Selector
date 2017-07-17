class Api::QueueItemsController < ApplicationController

  def show
  end

  def create
    @queue_item = QueueItem.new(queue_item_params)

    show_id = queue_item_params[:show_id].to_i
    prev_queue = User.find(queue_item_params[:user_id]).queue_hash_by_show[show_id]

    if prev_queue
      @queue_item.seek = prev_queue.seek
    end

    if @queue_item.save
      render :show
    else
      render json: @queue_item.errors.full_messages, status: 422
    end
  end


  def update
    @queue_item = QueueItem.where({
      user_id: queue_item_params[:user_id],
      show_id: queue_item_params[:show_id]
    }).order("created_at DESC").limit(1).first

    if @queue_item.update(queue_item_params)
      render :show
    else
      render json: @queue_item.errors.full_messages, status: 422
    end
  end


  def destroy
    @queue_item = QueueItem.find(params[:id])
    @queue_item.destroy
    render :show
  end

  private

  def queue_item_params
    params.require(:queue_item).permit(:user_id, :show_id, :seek)
  end
end
