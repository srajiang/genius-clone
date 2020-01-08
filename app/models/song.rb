class Song < ApplicationRecord

  validates :title, :body, :album_id, :artist_id, presence: :true
  serialize :body, Array

end
