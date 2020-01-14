class Song < ApplicationRecord

  validates :title, :body, :album, :artist, :genre, presence: :true
  serialize :body, Array

  has_one_attached :photo

  has_many :referents,
      primary_key: :id,
      foreign_key: :song_id,
      class_name: :Referent

  has_many :annotations, dependent: :destroy,
      through: :referents,
      source: :annotations
end


