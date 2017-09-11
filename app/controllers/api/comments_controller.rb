class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @show = Show.find(params[:showId].to_i)
    @comments = @show.comments
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comments.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.destroy
    render :show
  end



  private

  def comment_params
    params.require(:comment).permit(:body, :show_id, :parent_comment_id)
  end
end
