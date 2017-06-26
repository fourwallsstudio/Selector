class RemoveIndex < ActiveRecord::Migration
  def change
    remove_index :queue_items, column: [:show_id, :user_id]
  end
end
