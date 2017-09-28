class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :show_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
