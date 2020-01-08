class Song < ApplicationRecord

  validates :title, :body, :album, :artist, :genre, presence: :true
  serialize :body, Array

end
