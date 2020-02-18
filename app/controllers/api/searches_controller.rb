class Api::SearchesController < ApplicationController
  
  def index

    query = params[:input].downcase

    @songs_by_title = Song.where("lower(title) LIKE ?", "%#{query}%")
    @songs_by_lyric = Song.where('lower(body) LIKE ?', "%#{query}%")

    p " ACTIVE RECORD --------------------------------------------------"
    p @songs_by_title
    p @songs_by_lyric

    render :index
  end

end
