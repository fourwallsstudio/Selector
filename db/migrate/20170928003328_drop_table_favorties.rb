class DropTableFavorties < ActiveRecord::Migration
  def change
    drop_table :favorties
  end
end
