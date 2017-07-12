class Api::GraphDataController < ApplicationController

  def show
    @graph_data = GraphDatum.new(Show.find(params[:id]))
  end

end
