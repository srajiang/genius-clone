class CreateReferents < ActiveRecord::Migration[5.2]
  def change
    create_table :referents do |t|
      t.integer :fragment_range_start, null:false
      t.integer :fragment_range_end, null:false
      t.integer :song_id, null:false

      t.timestamps
    end
  end
end
