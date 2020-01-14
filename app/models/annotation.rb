class Annotation < ApplicationRecord
  belongs_to :annotator,
      primary_key: :id,
      foreign_key: :annotator_id,
      class_name: :User

  belongs_to :referent,
      primary_key: :id,
      foreign_key: :referent_id,
      class_name: :Referent
  
end

