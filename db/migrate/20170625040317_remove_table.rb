class RemoveTable < ActiveRecord::Migration
  def change
    drop_table :cue_items
  end
end
