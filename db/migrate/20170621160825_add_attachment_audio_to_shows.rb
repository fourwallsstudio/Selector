class AddAttachmentAudioToShows < ActiveRecord::Migration
  def self.up
    change_table :shows do |t|
      t.attachment :audio, null: false
    end
  end

  def self.down
    remove_attachment :shows, :audio
  end
end
