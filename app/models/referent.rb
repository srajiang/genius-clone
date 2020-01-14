class Referent < ApplicationRecord

  belongs_to :song,
      primary_key: :id,
      foreign_key: :song_id,
      class_name: :Song

  has_many :annotations,
      primary_key: :id,
      foreign_key: :referent_id,
      class_name: :Annotation
  
end