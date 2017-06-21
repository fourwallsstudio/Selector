class AddColumnToShows < ActiveRecord::Migration
  def change
    add_column :shows, :author_id, :integer, null: false
  end
end
