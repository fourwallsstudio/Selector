class CreateQueueItems < ActiveRecord::Migration
  def change
    create_table :queue_items do |t|
      t.integer :show_id, null: false
      t.integer :user_id, null: false
      t.float :seek
      t.integer :ord, null: false

      t.timestamps null: false
    end

    add_index :queue_items, [:show_id, :user_id], unique: true
  end
end
