class CreateCueItems < ActiveRecord::Migration
  def change
    create_table :cue_items do |t|
      t.integer :show_id, null: false
      t.integer :user_id, null: false
      t.float :seek
      t.integer :ord, null: false

      t.timestamps null: false
    end

    add_index :cue_items, [:show_id, :user_id], unique: true
    add_index :cue_items, :user_id
  end
end
