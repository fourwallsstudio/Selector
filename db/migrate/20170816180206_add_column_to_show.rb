class AddColumnToShow < ActiveRecord::Migration
  def change
    add_column :shows, :image_meta, :text
  end
end
