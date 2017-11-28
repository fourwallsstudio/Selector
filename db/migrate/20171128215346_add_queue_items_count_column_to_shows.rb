class AddQueueItemsCountColumnToShows < ActiveRecord::Migration
  def change
    add_column :shows, :queue_items_count, :integer
  end
end
