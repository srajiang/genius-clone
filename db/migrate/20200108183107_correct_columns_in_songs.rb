class CorrectColumnsInSongs < ActiveRecord::Migration[5.2]
  def change

    remove_column :songs, :album, :integer
    remove_column :songs, :artist, :integer
    add_column :songs, :album, :string
    add_column :songs, :artist, :string
    
  end
end
