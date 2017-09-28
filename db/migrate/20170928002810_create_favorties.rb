class CreateFavorties < ActiveRecord::Migration
  def change
    create_table :favorties do |t|

      t.timestamps null: false
    end
  end
end
