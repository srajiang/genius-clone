class Api::SearchesController < ApplicationController
  
  def index

    query = params[:input].downcase

    @songs_by_title = Song.where("lower(title) LIKE ?", "%#{query}%")
    @songs_by_lyric = Song.where('lower(body) LIKE ?', "%#{query}%")

    if @songs_by_title
      render :index
    end

  end

end
