class ChangeQueue < ActiveRecord::Migration
  def change
    remove_column :queue_items, :ord
  end
end
