class Song < ApplicationRecord

  validates :title, :body, :album, :artist, :genre, presence: :true
  serialize :body, Array

  has_one_attached :photo

end
