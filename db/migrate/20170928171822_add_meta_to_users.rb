class AddMetaToUsers < ActiveRecord::Migration
  def change
    add_column :users, :avatar_meta, :text
  end
end
