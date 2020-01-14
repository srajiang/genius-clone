class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.text :body, null:false
      t.integer :referent_id, null:false
      t.integer :annotator_id, null:false

      t.timestamps
    end
  end
end
