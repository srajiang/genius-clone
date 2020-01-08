class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null:false
      t.text :body, null:false
      t.integer :album, null:false
      t.integer :artist, null:false
      t.string :genre, null:false
      t.timestamps
    end
  end
end
