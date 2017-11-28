class AddIndexToShows < ActiveRecord::Migration
  def change
    add_index :shows, :author_id
  end
end
