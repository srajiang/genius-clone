class AddColToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :about, :text
  end
end
