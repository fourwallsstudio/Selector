class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :show_id, null: false
      t.integer :user_id, null: false
      t.boolean :flagged, default: false

      t.timestamps null: false
    end

    add_index :comments, :show_id
    add_index :comments, :user_id
  end
end
